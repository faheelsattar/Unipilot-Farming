import { Address, BigDecimal, BigInt, log } from "@graphprotocol/graph-ts";
import { UniswapLiquidityManager } from "../generated/UnipilotFarm/UniswapLiquidityManager";
import { ULMState } from "../generated/UnipilotFarm/ULMState";
import { sqrtPriceX96ToTokenPrices } from "./utils/pricing";
import { Token } from "../generated/schema";
import { Deposit } from "../generated/UnipilotFarm/UnipilotFarm";
import { UniswapV3Factory } from "../generated/UniswapV3Pair/UniswapV3Factory";
import { ADDRESS_ZERO, UNISWAP_V3_FACTORY } from "./utils/constants";
import {
  fetchTokenDecimals,
  fetchTokenName,
  fetchTokenSymbol,
  fetchTokenTotalSupply,
} from "./utils/token";
export const getPoolDetails = (pool: Address): string[] => {
  let contract = ULMState.bind(
    Address.fromString("0x52b29e16e509e673cbb8793687c92593266d3f4e")
  );
  let data = contract.try_getPoolDetails(pool);
  if (data.reverted) {
    return [];
  }
  let token0 = data.value.value0.toHexString();
  let token1 = data.value.value1.toHexString();
  let sqrtPriceX96 = data.value.value5.toString();
  return [token0, token1, sqrtPriceX96];
};

// export const getDollarPrice = (
//   sqrtPriceX96: BigInt,
//   token1: Token,
//   token2: Token
// ): BigDecimal => {
//   let contract = UniswapLiquidityManager.bind(
//     Address.fromString("0xD918fD37C24C8F8E75408753AFC1C0Da91836204")
//   );
//   let usdWeth = contract.try_getTotalAmounts("address");
//   let tokenUsd = Token.load("token Usd adddress");
//   let tokenWeth = Token.load("token Weth adddress");

//   //calculte from above method
//   let usdPerWeth = sqrtPriceX96ToTokenPrices(sqrtPriceX96, tokenUsd, tokenWeth);
//   return BigDecimal.fromString("1").div(usdPerWeth[0]);
// };

export const calculateAmounts = (
  event: Deposit,
  poolArr: string[]
): BigDecimal => {
  let contract = UniswapLiquidityManager.bind(
    Address.fromString("0xd918fd37c24c8f8e75408753afc1c0da91836204")
  );
  let totalAmount = contract.try_getTotalAmounts(event.params.pool);
  log.debug("total amount {}", [totalAmount.value.value2.toString()]);
  if (totalAmount.reverted) {
    return BigDecimal.fromString("0");
  }
  let amount1 = totalAmount.value.value2.toBigDecimal();
  let amount2 = totalAmount.value.value3.toBigDecimal();
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

  log.debug("1st case Amiunt 1 {} {}, Amount 2 {} {}", [
    amount1.toString(),
    token1.drivedUSD.toString(),
    amount2.toString(),
    token2.drivedUSD.toString(),
  ]);

  amount1 = amount1.times(token1.drivedUSD);
  amount2 = amount2.times(token2.drivedUSD);

  log.debug("2nd case Amiunt 1 {}, Amount 2 {}", [
    amount1.toString(),
    amount2.toString(),
  ]);
  let totalLiquidity = totalAmount.value.value4.toBigDecimal();
  let liquidity = event.params.totalSupply.toBigDecimal();
  let ratioLiquidity: BigDecimal = liquidity.div(totalLiquidity);
  log.debug("totalLiquidity {} liquidity {} ratioLiquidity {}", [
    totalLiquidity.toString(),
    liquidity.toString(),
    ratioLiquidity.toString(),
  ]);
  amount1 = amount1.times(ratioLiquidity);
  amount2 = amount2.times(ratioLiquidity);
  log.debug("3rd cas Amiunt 1 {}, Amount 2 {}", [
    amount1.toString(),
    amount2.toString(),
  ]);

  return amount1.plus(amount2);
};

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
