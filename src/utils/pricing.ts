import { Address, BigDecimal, BigInt, log } from "@graphprotocol/graph-ts";
import { Pool, Token } from "../../generated/schema";
import { getPoolDetails, getUniswapPool } from "../helper";
import { exponentToBigDecimal, safeDiv } from "../utils/index";
import {
  ADDRESS_ZERO,
  ONE_BD,
  USDC_WETH_03_ADDRESS,
  WETH,
  ZERO_BD,
} from "./constants";
let Q192 = BigInt.fromI32(2)
  .pow(192)
  .toBigDecimal();

export function sqrtPriceX96ToTokenPrices(
  sqrtPriceX96: BigInt,
  token0: Token,
  token1: Token
): BigDecimal[] {
  let num = sqrtPriceX96.times(sqrtPriceX96).toBigDecimal();
  let denom = Q192;
  let price1 = num
    .div(denom)
    .times(exponentToBigDecimal(token0.decimals))
    .div(exponentToBigDecimal(token1.decimals));

  let price0 = safeDiv(BigDecimal.fromString("1"), price1);
  return [price0, price1];
}

export function getEthPriceInUSD(): BigDecimal {
  let USDC_WETH_PAIR = Pool.load(USDC_WETH_03_ADDRESS);
  if (USDC_WETH_PAIR) {
    log.debug("USDC_WETH_PAIR.token0Price, {}", [
      USDC_WETH_PAIR.token0Price.toString(),
    ]);
    return USDC_WETH_PAIR.token0Price;
  } else {
    return ZERO_BD;
  }
}

export function findWethPerTokenV3(tokenAddress: string): BigDecimal {
  if (Address.fromString(tokenAddress).equals(Address.fromString(WETH))) {
    return ONE_BD;
  }
  let poolAddress = ADDRESS_ZERO;
  poolAddress = getUniswapPool(
    Address.fromString(tokenAddress),
    Address.fromString(WETH),
    BigInt.fromI32(3000)
  );

  const poolArr = getPoolDetails(Address.fromString(poolAddress));
  if (poolArr.length == 0) return ZERO_BD;
  let token0 = Token.load(poolArr[0]);
  let token1 = Token.load(poolArr[1]);
  if (token0 == null || token1 == null) {
    if (token0 == null) {
      log.debug("token 0 {}", ["not found"]);
    }
    if (token1 == null) {
      log.debug("token 1 {}", ["not found"]);
    }
    return ZERO_BD;
  }
  const prices = sqrtPriceX96ToTokenPrices(
    BigInt.fromString(poolArr[2]),
    token0,
    token1
  );
  log.debug("Prices {} {}", [prices[0].toString(), prices[1].toString()]);
  let wethPerToken = ZERO_BD;
  if (token0.symbol == "WETH") {
    wethPerToken = prices[0];
  } else {
    wethPerToken = prices[1];
  }
  log.debug("wethPerToken {}", [wethPerToken.toString()]);

  return wethPerToken;
}
