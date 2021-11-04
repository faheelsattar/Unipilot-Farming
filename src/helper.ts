import { Address, BigDecimal, BigInt, log } from "@graphprotocol/graph-ts";
import { UniswapLiquidityManager } from "../generated/UnipilotFarm/UniswapLiquidityManager";
import { ULMState } from "../generated/UnipilotFarm/ULMState";
import { sqrtPriceX96ToTokenPrices } from "./utils/pricing";
import { Token } from "../generated/schema";
import { Deposit } from "../generated/UnipilotFarm/UnipilotFarm";
import { UniswapV3Factory } from "../generated/UniswapV3Pair/UniswapV3Factory";
import {
  ADDRESS_ZERO,
  ULM_ADDRESS,
  ULM_STATE_ADDRESS,
  UNISWAP_V3_FACTORY,
  ZERO_BI,
} from "./utils/constants";
import {
  fetchTokenDecimals,
  fetchTokenName,
  fetchTokenSymbol,
  fetchTokenTotalSupply,
} from "./utils/token";
import { exponentToBigDecimal } from "./utils";
export const getPoolDetails = (pool: Address): string[] => {
  let contract = ULMState.bind(Address.fromString(ULM_STATE_ADDRESS));
  let data = contract.try_getPoolDetails(pool);
  if (data.reverted) {
    return [];
  }
  let token0 = data.value.value0.toHexString();
  let token1 = data.value.value1.toHexString();
  let fee = BigInt.fromI32(data.value.value2).toString();
  let sqrtPriceX96 = data.value.value5.toString();
  return [token0, token1, sqrtPriceX96, fee];
};

export const calculateAmounts = (
  pool: Address,
  totalSupply: BigInt,
  poolArr: string[]
): BigDecimal => {
  let contract = UniswapLiquidityManager.bind(Address.fromString(ULM_ADDRESS));
  let totalAmount = contract.try_getTotalAmounts(pool);
  if (totalAmount.reverted) {
    return BigDecimal.fromString("0");
  }
  let amount0 = totalAmount.value.value2;
  let amount1 = totalAmount.value.value3;
  let decimal0 = fetchTokenDecimals(Address.fromString(poolArr[0]));
  let decimal1 = fetchTokenDecimals(Address.fromString(poolArr[1]));
  let convertAmount0 = tokenAmountToDecimal(amount0, decimal0);
  let convertAmount1 = tokenAmountToDecimal(amount1, decimal1);

  let token1 = Token.load(poolArr[0]);
  let token2 = Token.load(poolArr[1]);
  log.debug("token 1 {}, token 2 {}", [poolArr[0], poolArr[1]]);
  if (!token1 || !token2) {
    log.debug("token 1 aur token 2 doesnot exists {} ,,, {}", [
      poolArr[0],
      poolArr[1],
    ]);
    return BigDecimal.fromString("0");
  }

  log.debug("1st case Amiunt 1 {} {} {}, Amount 2 {} {} {}", [
    convertAmount0.toString(),
    token1.id,
    token1.drivedUSD.toString(),
    convertAmount1.toString(),
    token2.drivedUSD.toString(),
    token2.id,
  ]);

  convertAmount0 = convertAmount0.times(token1.drivedUSD);
  convertAmount1 = convertAmount1.times(token2.drivedUSD);

  log.debug("2nd case Amiunt 1 {} {} {}, Amount 2 {} {} {}", [
    convertAmount0.toString(),
    token1.id,
    token1.drivedUSD.toString(),
    convertAmount1.toString(),
    token2.drivedUSD.toString(),
    token2.id,
  ]);
  let totalLiquidity = totalAmount.value.value4.toBigDecimal();
  let liquidity = totalSupply.toBigDecimal();
  let ratioLiquidity: BigDecimal = liquidity.div(totalLiquidity);
  log.debug("totalLiquidity {} liquidity {} ratioLiquidity {}", [
    totalLiquidity.toString(),
    liquidity.toString(),
    ratioLiquidity.toString(),
  ]);
  convertAmount0 = convertAmount0.times(ratioLiquidity);
  convertAmount1 = convertAmount1.times(ratioLiquidity);
  log.debug("3rd cas Amiunt 1 {} {} {} , Amount 2 {} {} {}", [
    convertAmount0.toString(),
    token1.id,
    token1.drivedUSD.toString(),
    convertAmount1.toString(),
    token2.drivedUSD.toString(),
    token2.id,
  ]);
  return convertAmount0.plus(convertAmount1);
};

export function tokenAmountToDecimal(
  tokenAmount: BigInt,
  exchangeDecimals: BigInt
): BigDecimal {
  if (exchangeDecimals == ZERO_BI) {
    return tokenAmount.toBigDecimal();
  }
  return tokenAmount.toBigDecimal().div(exponentToBigDecimal(exchangeDecimals));
}

export function getUniswapPool(
  token0Address: Address,
  token1Address: Address,
  feeTier: BigInt
): string {
  let contract = UniswapV3Factory.bind(Address.fromString(UNISWAP_V3_FACTORY));
  let poolAddress = ADDRESS_ZERO;
  let poolAddressResult = contract.try_getPool(
    token0Address,
    token1Address,
    feeTier.toI32()
  );
  if (!poolAddressResult.reverted) {
    poolAddress = poolAddressResult.value.toHexString();
  }
  return poolAddress;
}
