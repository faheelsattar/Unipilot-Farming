import { Address, BigDecimal, BigInt, log } from "@graphprotocol/graph-ts";
import {
  Deposit,
  NewPool,
  UpdateMultiplier,
  UpdatePilotPerBlock,
  WithdrawNFT,
  WithdrawReward,
} from "../generated/UnipilotFarm/UnipilotFarm";
import { Swap } from "../generated/UniswapV3Pair/UniswapV3Pair";

import { Bundle, Nft, Pool, Protocol, Token, User } from "../generated/schema";
import { UniswapLiquidityManager } from "../generated/UnipilotFarm/UniswapLiquidityManager";
import { calculateAmounts, getPoolDetails } from "./helper";
import {
  fetchTokenDecimals,
  fetchTokenName,
  fetchTokenSymbol,
  fetchTokenTotalSupply,
} from "./utils/token";
import { ONE_BD, USDC_WETH_03_ADDRESS, USDT, WETH } from "./utils/constants";
import {
  findWethPerTokenV3,
  getEthPriceInUSD,
  sqrtPriceX96ToTokenPrices,
} from "./utils/pricing";
import { initPool } from "./common";

export function handleNewPool(event: NewPool): void {
  let protocol = Protocol.load("1");
  if (!protocol) {
    protocol = new Protocol("1");
    protocol.save();
  }
  let pool = Pool.load(event.params.poolAddress.toHexString());
  if (!pool) {
    pool = new Pool(event.params.poolAddress.toHexString());
    pool.multiplier = event.params.rewardMultiplier;
    pool.pilotPerBlock = event.params.rewardPerBlock;
  }
  const poolArr = getPoolDetails(event.params.poolAddress);
  if (poolArr.length === 0) {
    return;
  }
  let token0 = Token.load(poolArr[0]);
  let token1 = Token.load(poolArr[1]);
  if (!token0) {
    token0 = new Token(poolArr[0]);
    token0.name = fetchTokenName(Address.fromString(poolArr[0]));
    token0.symbol = fetchTokenSymbol(Address.fromString(poolArr[0]));
    token0.totalSupply = fetchTokenTotalSupply(Address.fromString(poolArr[0]));
    token0.decimals = fetchTokenDecimals(Address.fromString(poolArr[0]));
    token0.drivedETH = BigDecimal.fromString("0");
    token0.drivedUSD = BigDecimal.fromString("0");
    token0.save();
  }

  if (!token1) {
    token1 = new Token(poolArr[1]);
    token1.name = fetchTokenName(Address.fromString(poolArr[1]));
    token1.symbol = fetchTokenSymbol(Address.fromString(poolArr[1]));
    token1.totalSupply = fetchTokenTotalSupply(Address.fromString(poolArr[1]));
    token1.decimals = fetchTokenDecimals(Address.fromString(poolArr[1]));
    token1.drivedETH = BigDecimal.fromString("0");
    token1.drivedUSD = BigDecimal.fromString("0");
    token1.save();
  }
  pool.token0 = token0.id;
  pool.token1 = token1.id;
  pool.fee = BigInt.fromString(poolArr[3]);
  pool.save();
}

export function handleUpdatedPilorPerBlock(event: UpdatePilotPerBlock): void {
  let pool = Pool.load(event.params.poolAddress.toHexString());
  if (!pool) return;
  pool.pilotPerBlock = event.params.updated;
}

export function handleUpdateMultiplier(event: UpdateMultiplier): void {
  let pool = Pool.load(event.params.poolAddress.toHexString());
  if (!pool) return;
  pool.pilotPerBlock = event.params.updated;
}
export function handleSwap(event: Swap): void {
  if (event.address.toHexString() == USDC_WETH_03_ADDRESS) {
    initPool(event);
  }
  let pool = Pool.load(event.address.toHexString());
  if (pool == null) return;
  pool.sqrtPrice = event.params.sqrtPriceX96;
  pool.reserve0 = ONE_BD;
  pool.save();
  let token0 = Token.load(pool.token0);
  if (token0 == null) return;
  let token1 = Token.load(pool.token1);
  if (token1 == null) return;
  let prices = sqrtPriceX96ToTokenPrices(
    pool.sqrtPrice,
    token0 as Token,
    token1 as Token
  );
  pool.token0Price = prices[0];
  pool.token1Price = prices[1];
  pool.save();
  let bundle = Bundle.load("1");
  if (!bundle) {
    bundle = new Bundle("1");
  }
  bundle.ethPriceUSD = getEthPriceInUSD();
  bundle.save();

  token0.drivedETH = findWethPerTokenV3(token0.id);
  token1.drivedETH = findWethPerTokenV3(token1.id);

  token0.drivedUSD = token0.drivedETH.times(bundle.ethPriceUSD);
  token1.drivedUSD = token1.drivedETH.times(bundle.ethPriceUSD);

  const poolArr = getPoolDetails(event.address);
  if (poolArr.length === 0) {
    return;
  }
  const poolPrevTvl = pool.tvl;
  const updatedAmount = calculateAmounts(
    event.address,
    pool.totalSupply,
    poolArr
  );

  let protocol = Protocol.load("1");
  if (!protocol) return;

  log.debug("updated amount {} {} {}", [
    updatedAmount.toString(),
    poolPrevTvl.toString(),
    updatedAmount.minus(poolPrevTvl).toString(),
  ]);

  let amount = updatedAmount.minus(poolPrevTvl);
  pool.tvl = updatedAmount;
  pool.save();

  log.debug("protocol tvl {} {}", [
    protocol.tvl.toString(),
    protocol.tvl.plus(amount).toString(),
  ]);
  protocol.tvl = protocol.tvl.plus(amount);
  protocol.save();
  token0.save();
  token1.save();
}

export function handleDeposit(event: Deposit): void {
  let protocol = Protocol.load("1");
  if (!protocol) return;
  protocol.totalNftLocked = protocol.totalNftLocked.plus(BigInt.fromI32(1));
  let pool = Pool.load(event.params.pool.toHexString());
  if (!pool) {
    log.debug("pool not found {}", [event.params.pool.toHexString()]);
    return;
  }
  log.debug("pool {}", [event.params.pool.toHexString()]);

  //get token1 address, token2 address and sqrtPriceX96
  const poolArr = getPoolDetails(event.params.pool);
  if (poolArr.length === 0) {
    log.debug("pool arr not found", []);
    return;
  }

  let bundle = Bundle.load("1");
  if (!bundle) {
    bundle = new Bundle("1");
  }
  bundle.ethPriceUSD = getEthPriceInUSD();
  bundle.save();
  log.debug("pool ARR {} {} {}", poolArr);
  let token0 = Token.load(poolArr[0]);
  let token1 = Token.load(poolArr[1]);
  if (!token0) return;
  token0.drivedETH = BigDecimal.fromString("0");
  token0.drivedUSD = BigDecimal.fromString("0");
  token0.save();

  log.debug("token 0 {} derived eth {}", [
    token0.id,
    findWethPerTokenV3(token0.id).toString(),
  ]);

  token0.drivedETH = findWethPerTokenV3(token0.id);
  token0.drivedUSD = token0.drivedETH.times(bundle.ethPriceUSD);
  token0.save();
  if (!token1) return;
  token1.drivedETH = BigDecimal.fromString("0");
  token1.drivedUSD = BigDecimal.fromString("0");
  token1.save();

  log.debug("token 1 {} derived eth {}", [
    token1.id,
    findWethPerTokenV3(token1.id).toString(),
  ]);
  token1.drivedETH = findWethPerTokenV3(token1.id);
  token1.drivedUSD = token1.drivedETH.times(bundle.ethPriceUSD);
  token1.save();
  const updatedAmount = calculateAmounts(
    event.params.pool,
    event.params.totalSupply,
    poolArr
  );

  log.debug("updated amount {}", [updatedAmount.toString()]);
  log.debug("protocol tvl in deposit {}", [protocol.tvl.toString()]);
  protocol.tvl = protocol.tvl.plus(updatedAmount);
  protocol.save();
  pool.token0 = token0.id;
  pool.token1 = token1.id;
  pool.tvl = updatedAmount;
  pool.multiplier = event.params.rewardMultiplier;
  pool.pilotPerBlock = event.params.rewardPerBlock;
  pool.apr = BigInt.fromI32(0);
  pool.nftCount = pool.nftCount.plus(BigInt.fromI32(1));
  pool.fee = BigInt.fromString(poolArr[3]);
  pool.totalSupply = event.params.totalSupply;
  pool.save();
  //we will need to change this and get it from event Params
  let user = User.load(event.transaction.from.toHexString());
  if (!user) {
    user = new User(event.transaction.from.toHexString());
    user.address = event.transaction.from.toHexString();
    user.save();
  }
  user.nftCount = user.nftCount.plus(BigInt.fromI32(1));
  let nft = Nft.load(event.params.tokenId.toHexString());
  if (!nft) {
    nft = new Nft(event.params.tokenId.toHexString());
    nft.tokenId = event.params.tokenId;
    nft.user = user.address;
    nft.pool = pool.id;
    nft.liquidity = event.params.liquidity;
    nft.locked = true;
    nft.save();
  }
}

export function handleWithdrawNFT(event: WithdrawNFT): void {
  let protocol = Protocol.load("1");
  if (!protocol) return;
  if (protocol.totalNftLocked > BigInt.fromI32(0)) {
    protocol.totalNftLocked = protocol.totalNftLocked.minus(BigInt.fromI32(1));
  }
  let pool = Pool.load(event.params.pool.toHexString());
  if (!pool) return;
  const poolArr = getPoolDetails(event.params.pool);
  if (poolArr.length === 0) return;
  const updatedAmount = calculateAmounts(
    event.params.pool,
    event.params.totalSupply,
    poolArr
  );
  protocol.tvl = protocol.tvl.minus(updatedAmount);
  protocol.save();
  pool.tvl = updatedAmount;
  pool.save();
  let user = User.load(event.transaction.from.toHexString());
  if (!user) return;
  if (user.nftCount > BigInt.fromI32(0)) {
    user.nftCount = user.nftCount.minus(BigInt.fromI32(1));
  }
  user.save();

  let nft = Nft.load(event.params.tokenId.toHexString());
  if (!nft) return;
  nft.locked = false;
  nft.save();
}

export function handleWithdrawReward(event: WithdrawReward): void {
  let protocol = Protocol.load("1");
  if (!protocol) return;
  protocol.reward = protocol.reward.plus(event.params.lastRewardTransferred);
  protocol.save();
  let pool = Pool.load(event.params.pool.toHexString());
  if (!pool) return;
  pool.reward = pool.reward.plus(event.params.lastRewardTransferred);
  // log.debug("pool reward {}, pool reward added {}", [
  //   event.params.reward.toString(),
  //   pool.reward.plus(event.params.reward).toString(),
  // ]);
  pool.save();
  let user = User.load(event.transaction.from.toHexString());
  if (!user) return;
  user.reward = user.reward.plus(event.params.lastRewardTransferred);
  user.save();
  let nft = Nft.load(event.params.tokenId.toHexString());
  if (!nft) return;
  nft.reward = nft.reward.plus(event.params.lastRewardTransferred);
  nft.save();
}
