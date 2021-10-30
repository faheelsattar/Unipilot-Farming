// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get pool(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get liquidity(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get totalSupply(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get globalReward(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get rewardMultiplier(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get rewardPerBlock(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class WithdrawNFT extends ethereum.Event {
  get params(): WithdrawNFT__Params {
    return new WithdrawNFT__Params(this);
  }
}

export class WithdrawNFT__Params {
  _event: WithdrawNFT;

  constructor(event: WithdrawNFT) {
    this._event = event;
  }

  get pool(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get userAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class WithdrawReward extends ethereum.Event {
  get params(): WithdrawReward__Params {
    return new WithdrawReward__Params(this);
  }
}

export class WithdrawReward__Params {
  _event: WithdrawReward;

  constructor(event: WithdrawReward) {
    this._event = event;
  }

  get pool(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nftId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get liquidity(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get reward(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get globalReward(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get totalSupply(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get lastRewardTransferred(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class UnipilotFarm__currentAltRewardResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class UnipilotFarm__currentRewardResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class UnipilotFarm__poolInfoResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: Address;
  value8: boolean;
  value9: BigInt;
  value10: BigInt;
  value11: BigInt;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: Address,
    value8: boolean,
    value9: BigInt,
    value10: BigInt,
    value11: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
    this.value11 = value11;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromAddress(this.value7));
    map.set("value8", ethereum.Value.fromBoolean(this.value8));
    map.set("value9", ethereum.Value.fromUnsignedBigInt(this.value9));
    map.set("value10", ethereum.Value.fromUnsignedBigInt(this.value10));
    map.set("value11", ethereum.Value.fromUnsignedBigInt(this.value11));
    return map;
  }
}

export class UnipilotFarm__totalUserNftWRTPoolResult {
  value0: BigInt;
  value1: Array<BigInt>;

  constructor(value0: BigInt, value1: Array<BigInt>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    return map;
  }
}

export class UnipilotFarm__userInfoResult {
  value0: BigInt;
  value1: Address;
  value2: BigInt;
  value3: Address;
  value4: BigInt;
  value5: BigInt;
  value6: boolean;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: BigInt,
    value3: Address,
    value4: BigInt,
    value5: BigInt,
    value6: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromBoolean(this.value6));
    return map;
  }
}

export class UnipilotFarm extends ethereum.SmartContract {
  static bind(address: Address): UnipilotFarm {
    return new UnipilotFarm("UnipilotFarm", address);
  }

  currentAltReward(
    poolAddress: Address,
    tokenId: BigInt
  ): UnipilotFarm__currentAltRewardResult {
    let result = super.call(
      "currentAltReward",
      "currentAltReward(address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(poolAddress),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );

    return new UnipilotFarm__currentAltRewardResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_currentAltReward(
    poolAddress: Address,
    tokenId: BigInt
  ): ethereum.CallResult<UnipilotFarm__currentAltRewardResult> {
    let result = super.tryCall(
      "currentAltReward",
      "currentAltReward(address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(poolAddress),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new UnipilotFarm__currentAltRewardResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  currentReward(
    poolAddress: Address,
    tokenId: BigInt
  ): UnipilotFarm__currentRewardResult {
    let result = super.call(
      "currentReward",
      "currentReward(address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(poolAddress),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );

    return new UnipilotFarm__currentRewardResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_currentReward(
    poolAddress: Address,
    tokenId: BigInt
  ): ethereum.CallResult<UnipilotFarm__currentRewardResult> {
    let result = super.tryCall(
      "currentReward",
      "currentReward(address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(poolAddress),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new UnipilotFarm__currentRewardResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  depositNFT(poolAddress: Address, tokenId: BigInt): boolean {
    let result = super.call(
      "depositNFT",
      "depositNFT(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(poolAddress),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );

    return result[0].toBoolean();
  }

  try_depositNFT(
    poolAddress: Address,
    tokenId: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "depositNFT",
      "depositNFT(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(poolAddress),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  farmingActive(param0: Address, param1: Address): boolean {
    let result = super.call(
      "farmingActive",
      "farmingActive(address,address):(bool)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );

    return result[0].toBoolean();
  }

  try_farmingActive(
    param0: Address,
    param1: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "farmingActive",
      "farmingActive(address,address):(bool)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getAltGlobalReward(poolAddress: Address): BigInt {
    let result = super.call(
      "getAltGlobalReward",
      "getAltGlobalReward(address):(uint256)",
      [ethereum.Value.fromAddress(poolAddress)]
    );

    return result[0].toBigInt();
  }

  try_getAltGlobalReward(poolAddress: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getAltGlobalReward",
      "getAltGlobalReward(address):(uint256)",
      [ethereum.Value.fromAddress(poolAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getGlobalReward(poolAddress: Address): BigInt {
    let result = super.call(
      "getGlobalReward",
      "getGlobalReward(address):(uint256)",
      [ethereum.Value.fromAddress(poolAddress)]
    );

    return result[0].toBigInt();
  }

  try_getGlobalReward(poolAddress: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getGlobalReward",
      "getGlobalReward(address):(uint256)",
      [ethereum.Value.fromAddress(poolAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  globalFarmingReward(): BigInt {
    let result = super.call(
      "globalFarmingReward",
      "globalFarmingReward():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_globalFarmingReward(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "globalFarmingReward",
      "globalFarmingReward():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nftStatus(tokenId: BigInt): boolean {
    let result = super.call("nftStatus", "nftStatus(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toBoolean();
  }

  try_nftStatus(tokenId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("nftStatus", "nftStatus(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  poolInfo(param0: Address): UnipilotFarm__poolInfoResult {
    let result = super.call(
      "poolInfo",
      "poolInfo(address):(address,uint256,uint256,uint256,uint256,uint256,uint256,address,bool,uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new UnipilotFarm__poolInfoResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toAddress(),
      result[8].toBoolean(),
      result[9].toBigInt(),
      result[10].toBigInt(),
      result[11].toBigInt()
    );
  }

  try_poolInfo(
    param0: Address
  ): ethereum.CallResult<UnipilotFarm__poolInfoResult> {
    let result = super.tryCall(
      "poolInfo",
      "poolInfo(address):(address,uint256,uint256,uint256,uint256,uint256,uint256,address,bool,uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new UnipilotFarm__poolInfoResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toAddress(),
        value[8].toBoolean(),
        value[9].toBigInt(),
        value[10].toBigInt(),
        value[11].toBigInt()
      )
    );
  }

  poolWhitelist(param0: Address): boolean {
    let result = super.call("poolWhitelist", "poolWhitelist(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_poolWhitelist(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "poolWhitelist",
      "poolWhitelist(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  toggleActiveAlt(poolAddress: Address): boolean {
    let result = super.call(
      "toggleActiveAlt",
      "toggleActiveAlt(address):(bool)",
      [ethereum.Value.fromAddress(poolAddress)]
    );

    return result[0].toBoolean();
  }

  try_toggleActiveAlt(poolAddress: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "toggleActiveAlt",
      "toggleActiveAlt(address):(bool)",
      [ethereum.Value.fromAddress(poolAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  toggleBooster(tokenId: BigInt): boolean {
    let result = super.call("toggleBooster", "toggleBooster(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toBoolean();
  }

  try_toggleBooster(tokenId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "toggleBooster",
      "toggleBooster(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalUserNftWRTPool(
    userAddress: Address,
    poolAddress: Address
  ): UnipilotFarm__totalUserNftWRTPoolResult {
    let result = super.call(
      "totalUserNftWRTPool",
      "totalUserNftWRTPool(address,address):(uint256,uint256[])",
      [
        ethereum.Value.fromAddress(userAddress),
        ethereum.Value.fromAddress(poolAddress)
      ]
    );

    return new UnipilotFarm__totalUserNftWRTPoolResult(
      result[0].toBigInt(),
      result[1].toBigIntArray()
    );
  }

  try_totalUserNftWRTPool(
    userAddress: Address,
    poolAddress: Address
  ): ethereum.CallResult<UnipilotFarm__totalUserNftWRTPoolResult> {
    let result = super.tryCall(
      "totalUserNftWRTPool",
      "totalUserNftWRTPool(address,address):(uint256,uint256[])",
      [
        ethereum.Value.fromAddress(userAddress),
        ethereum.Value.fromAddress(poolAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new UnipilotFarm__totalUserNftWRTPoolResult(
        value[0].toBigInt(),
        value[1].toBigIntArray()
      )
    );
  }

  updateAltMultiplier(poolAddress: Address, value: BigInt): BigInt {
    let result = super.call(
      "updateAltMultiplier",
      "updateAltMultiplier(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(poolAddress),
        ethereum.Value.fromUnsignedBigInt(value)
      ]
    );

    return result[0].toBigInt();
  }

  try_updateAltMultiplier(
    poolAddress: Address,
    value: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "updateAltMultiplier",
      "updateAltMultiplier(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(poolAddress),
        ethereum.Value.fromUnsignedBigInt(value)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  updateAltPerBlock(poolAddress: Address, value: BigInt): BigInt {
    let result = super.call(
      "updateAltPerBlock",
      "updateAltPerBlock(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(poolAddress),
        ethereum.Value.fromUnsignedBigInt(value)
      ]
    );

    return result[0].toBigInt();
  }

  try_updateAltPerBlock(
    poolAddress: Address,
    value: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "updateAltPerBlock",
      "updateAltPerBlock(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(poolAddress),
        ethereum.Value.fromUnsignedBigInt(value)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  updateMultiplier(poolAddress: Address, value: BigInt): BigInt {
    let result = super.call(
      "updateMultiplier",
      "updateMultiplier(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(poolAddress),
        ethereum.Value.fromUnsignedBigInt(value)
      ]
    );

    return result[0].toBigInt();
  }

  try_updateMultiplier(
    poolAddress: Address,
    value: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "updateMultiplier",
      "updateMultiplier(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(poolAddress),
        ethereum.Value.fromUnsignedBigInt(value)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  updatePilotPerBlock(poolAddress: Address, value: BigInt): BigInt {
    let result = super.call(
      "updatePilotPerBlock",
      "updatePilotPerBlock(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(poolAddress),
        ethereum.Value.fromUnsignedBigInt(value)
      ]
    );

    return result[0].toBigInt();
  }

  try_updatePilotPerBlock(
    poolAddress: Address,
    value: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "updatePilotPerBlock",
      "updatePilotPerBlock(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(poolAddress),
        ethereum.Value.fromUnsignedBigInt(value)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userInfo(param0: BigInt): UnipilotFarm__userInfoResult {
    let result = super.call(
      "userInfo",
      "userInfo(uint256):(uint256,address,uint256,address,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new UnipilotFarm__userInfoResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toAddress(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBoolean()
    );
  }

  try_userInfo(
    param0: BigInt
  ): ethereum.CallResult<UnipilotFarm__userInfoResult> {
    let result = super.tryCall(
      "userInfo",
      "userInfo(uint256):(uint256,address,uint256,address,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new UnipilotFarm__userInfoResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toAddress(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBoolean()
      )
    );
  }

  userToPoolToTokenIds(
    param0: Address,
    param1: Address,
    param2: BigInt
  ): BigInt {
    let result = super.call(
      "userToPoolToTokenIds",
      "userToPoolToTokenIds(address,address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );

    return result[0].toBigInt();
  }

  try_userToPoolToTokenIds(
    param0: Address,
    param1: Address,
    param2: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "userToPoolToTokenIds",
      "userToPoolToTokenIds(address,address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  withdrawNFT(poolAddress: Address, tokenId: BigInt): boolean {
    let result = super.call(
      "withdrawNFT",
      "withdrawNFT(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(poolAddress),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );

    return result[0].toBoolean();
  }

  try_withdrawNFT(
    poolAddress: Address,
    tokenId: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "withdrawNFT",
      "withdrawNFT(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(poolAddress),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  withdrawReward(poolAddress: Address, tokenId: BigInt): boolean {
    let result = super.call(
      "withdrawReward",
      "withdrawReward(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(poolAddress),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );

    return result[0].toBoolean();
  }

  try_withdrawReward(
    poolAddress: Address,
    tokenId: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "withdrawReward",
      "withdrawReward(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(poolAddress),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get pools(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DepositNFTCall extends ethereum.Call {
  get inputs(): DepositNFTCall__Inputs {
    return new DepositNFTCall__Inputs(this);
  }

  get outputs(): DepositNFTCall__Outputs {
    return new DepositNFTCall__Outputs(this);
  }
}

export class DepositNFTCall__Inputs {
  _call: DepositNFTCall;

  constructor(call: DepositNFTCall) {
    this._call = call;
  }

  get poolAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DepositNFTCall__Outputs {
  _call: DepositNFTCall;

  constructor(call: DepositNFTCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class EmergencyNFTWithdrawCall extends ethereum.Call {
  get inputs(): EmergencyNFTWithdrawCall__Inputs {
    return new EmergencyNFTWithdrawCall__Inputs(this);
  }

  get outputs(): EmergencyNFTWithdrawCall__Outputs {
    return new EmergencyNFTWithdrawCall__Outputs(this);
  }
}

export class EmergencyNFTWithdrawCall__Inputs {
  _call: EmergencyNFTWithdrawCall;

  constructor(call: EmergencyNFTWithdrawCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class EmergencyNFTWithdrawCall__Outputs {
  _call: EmergencyNFTWithdrawCall;

  constructor(call: EmergencyNFTWithdrawCall) {
    this._call = call;
  }
}

export class InsertPoolCall extends ethereum.Call {
  get inputs(): InsertPoolCall__Inputs {
    return new InsertPoolCall__Inputs(this);
  }

  get outputs(): InsertPoolCall__Outputs {
    return new InsertPoolCall__Outputs(this);
  }
}

export class InsertPoolCall__Inputs {
  _call: InsertPoolCall;

  constructor(call: InsertPoolCall) {
    this._call = call;
  }

  get poolAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InsertPoolCall__Outputs {
  _call: InsertPoolCall;

  constructor(call: InsertPoolCall) {
    this._call = call;
  }
}

export class MigrateFundDataCall extends ethereum.Call {
  get inputs(): MigrateFundDataCall__Inputs {
    return new MigrateFundDataCall__Inputs(this);
  }

  get outputs(): MigrateFundDataCall__Outputs {
    return new MigrateFundDataCall__Outputs(this);
  }
}

export class MigrateFundDataCall__Inputs {
  _call: MigrateFundDataCall;

  constructor(call: MigrateFundDataCall) {
    this._call = call;
  }

  get newContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class MigrateFundDataCall__Outputs {
  _call: MigrateFundDataCall;

  constructor(call: MigrateFundDataCall) {
    this._call = call;
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class ToggleActiveAltCall extends ethereum.Call {
  get inputs(): ToggleActiveAltCall__Inputs {
    return new ToggleActiveAltCall__Inputs(this);
  }

  get outputs(): ToggleActiveAltCall__Outputs {
    return new ToggleActiveAltCall__Outputs(this);
  }
}

export class ToggleActiveAltCall__Inputs {
  _call: ToggleActiveAltCall;

  constructor(call: ToggleActiveAltCall) {
    this._call = call;
  }

  get poolAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ToggleActiveAltCall__Outputs {
  _call: ToggleActiveAltCall;

  constructor(call: ToggleActiveAltCall) {
    this._call = call;
  }

  get currentStatus(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ToggleBoosterCall extends ethereum.Call {
  get inputs(): ToggleBoosterCall__Inputs {
    return new ToggleBoosterCall__Inputs(this);
  }

  get outputs(): ToggleBoosterCall__Outputs {
    return new ToggleBoosterCall__Outputs(this);
  }
}

export class ToggleBoosterCall__Inputs {
  _call: ToggleBoosterCall;

  constructor(call: ToggleBoosterCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ToggleBoosterCall__Outputs {
  _call: ToggleBoosterCall;

  constructor(call: ToggleBoosterCall) {
    this._call = call;
  }

  get currentStatus(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class UpdateAltMultiplierCall extends ethereum.Call {
  get inputs(): UpdateAltMultiplierCall__Inputs {
    return new UpdateAltMultiplierCall__Inputs(this);
  }

  get outputs(): UpdateAltMultiplierCall__Outputs {
    return new UpdateAltMultiplierCall__Outputs(this);
  }
}

export class UpdateAltMultiplierCall__Inputs {
  _call: UpdateAltMultiplierCall;

  constructor(call: UpdateAltMultiplierCall) {
    this._call = call;
  }

  get poolAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateAltMultiplierCall__Outputs {
  _call: UpdateAltMultiplierCall;

  constructor(call: UpdateAltMultiplierCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class UpdateAltPerBlockCall extends ethereum.Call {
  get inputs(): UpdateAltPerBlockCall__Inputs {
    return new UpdateAltPerBlockCall__Inputs(this);
  }

  get outputs(): UpdateAltPerBlockCall__Outputs {
    return new UpdateAltPerBlockCall__Outputs(this);
  }
}

export class UpdateAltPerBlockCall__Inputs {
  _call: UpdateAltPerBlockCall;

  constructor(call: UpdateAltPerBlockCall) {
    this._call = call;
  }

  get poolAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateAltPerBlockCall__Outputs {
  _call: UpdateAltPerBlockCall;

  constructor(call: UpdateAltPerBlockCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class UpdateMultiplierCall extends ethereum.Call {
  get inputs(): UpdateMultiplierCall__Inputs {
    return new UpdateMultiplierCall__Inputs(this);
  }

  get outputs(): UpdateMultiplierCall__Outputs {
    return new UpdateMultiplierCall__Outputs(this);
  }
}

export class UpdateMultiplierCall__Inputs {
  _call: UpdateMultiplierCall;

  constructor(call: UpdateMultiplierCall) {
    this._call = call;
  }

  get poolAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateMultiplierCall__Outputs {
  _call: UpdateMultiplierCall;

  constructor(call: UpdateMultiplierCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class UpdatePilotPerBlockCall extends ethereum.Call {
  get inputs(): UpdatePilotPerBlockCall__Inputs {
    return new UpdatePilotPerBlockCall__Inputs(this);
  }

  get outputs(): UpdatePilotPerBlockCall__Outputs {
    return new UpdatePilotPerBlockCall__Outputs(this);
  }
}

export class UpdatePilotPerBlockCall__Inputs {
  _call: UpdatePilotPerBlockCall;

  constructor(call: UpdatePilotPerBlockCall) {
    this._call = call;
  }

  get poolAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdatePilotPerBlockCall__Outputs {
  _call: UpdatePilotPerBlockCall;

  constructor(call: UpdatePilotPerBlockCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class WithdrawNFTCall extends ethereum.Call {
  get inputs(): WithdrawNFTCall__Inputs {
    return new WithdrawNFTCall__Inputs(this);
  }

  get outputs(): WithdrawNFTCall__Outputs {
    return new WithdrawNFTCall__Outputs(this);
  }
}

export class WithdrawNFTCall__Inputs {
  _call: WithdrawNFTCall;

  constructor(call: WithdrawNFTCall) {
    this._call = call;
  }

  get poolAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawNFTCall__Outputs {
  _call: WithdrawNFTCall;

  constructor(call: WithdrawNFTCall) {
    this._call = call;
  }

  get isLeft(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class WithdrawRewardCall extends ethereum.Call {
  get inputs(): WithdrawRewardCall__Inputs {
    return new WithdrawRewardCall__Inputs(this);
  }

  get outputs(): WithdrawRewardCall__Outputs {
    return new WithdrawRewardCall__Outputs(this);
  }
}

export class WithdrawRewardCall__Inputs {
  _call: WithdrawRewardCall;

  constructor(call: WithdrawRewardCall) {
    this._call = call;
  }

  get poolAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawRewardCall__Outputs {
  _call: WithdrawRewardCall;

  constructor(call: WithdrawRewardCall) {
    this._call = call;
  }

  get isSent(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}