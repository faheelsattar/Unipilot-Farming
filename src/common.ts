import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { Pool, Token } from "../generated/schema";
import { Swap } from "../generated/UniswapV3Pair/UniswapV3Pair";
import { ONE_BD, USDC_WETH_03_ADDRESS, USDT, WETH } from "./utils/constants";
import { sqrtPriceX96ToTokenPrices } from "./utils/pricing";
import {
  fetchTokenDecimals,
  fetchTokenName,
  fetchTokenSymbol,
  fetchTokenTotalSupply,
} from "./utils/token";

export function initPool(event: Swap): void {
  let pool = Pool.load(USDC_WETH_03_ADDRESS);
  if (pool) {
    return;
  }
  pool = new Pool(USDC_WETH_03_ADDRESS);
  let token0 = Token.load(WETH);
  if (!token0) {
    token0 = new Token(WETH);
    token0.name = fetchTokenName(Address.fromString(WETH));
    token0.totalSupply = fetchTokenTotalSupply(Address.fromString(WETH));
    token0.symbol = fetchTokenSymbol(Address.fromString(WETH));
  }
  token0.decimals = fetchTokenDecimals(Address.fromString(WETH));
  let token1 = Token.load(USDT);
  if (!token1) {
    token1 = new Token(USDT);
    token1.name = fetchTokenName(Address.fromString(USDT));
    token1.totalSupply = fetchTokenTotalSupply(Address.fromString(USDT));
    token1.symbol = fetchTokenSymbol(Address.fromString(USDT));
  }
  token1.decimals = fetchTokenDecimals(Address.fromString(USDT));

  let prices = sqrtPriceX96ToTokenPrices(
    event.params.sqrtPriceX96,
    token0 as Token,
    token1 as Token
  );
  token0.drivedETH = BigDecimal.fromString("0");
  token0.drivedUSD = BigDecimal.fromString("0");
  token0.save();
  token1.drivedETH = BigDecimal.fromString("0");
  token1.drivedUSD = BigDecimal.fromString("0");
  token1.save();

  pool.sqrtPrice = event.params.sqrtPriceX96;
  pool.reserve0 = ONE_BD;
  pool.reserve1 = ONE_BD;
  pool.token0Price = prices[0];
  pool.token1Price = prices[1];
  pool.token0 = WETH;
  pool.token1 = USDT;
  pool.tvl = BigDecimal.fromString("0");
  pool.nftCount = BigInt.fromI32(0);
  pool.multiplier = BigInt.fromI32(0);
  pool.apr = BigInt.fromI32(0);
  pool.save();
}
