// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Protocol extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tvl", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("rewardDistributed", Value.fromBigInt(BigInt.zero()));
    this.set("totalNftLocked", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Protocol entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Protocol entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Protocol", id.toString(), this);
    }
  }

  static load(id: string): Protocol | null {
    return changetype<Protocol | null>(store.get("Protocol", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tvl(): BigDecimal {
    let value = this.get("tvl");
    return value!.toBigDecimal();
  }

  set tvl(value: BigDecimal) {
    this.set("tvl", Value.fromBigDecimal(value));
  }

  get rewardDistributed(): BigInt {
    let value = this.get("rewardDistributed");
    return value!.toBigInt();
  }

  set rewardDistributed(value: BigInt) {
    this.set("rewardDistributed", Value.fromBigInt(value));
  }

  get totalNftLocked(): BigInt {
    let value = this.get("totalNftLocked");
    return value!.toBigInt();
  }

  set totalNftLocked(value: BigInt) {
    this.set("totalNftLocked", Value.fromBigInt(value));
  }
}

export class Bundle extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("ethPriceUSD", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Bundle entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Bundle entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Bundle", id.toString(), this);
    }
  }

  static load(id: string): Bundle | null {
    return changetype<Bundle | null>(store.get("Bundle", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ethPriceUSD(): BigDecimal {
    let value = this.get("ethPriceUSD");
    return value!.toBigDecimal();
  }

  set ethPriceUSD(value: BigDecimal) {
    this.set("ethPriceUSD", Value.fromBigDecimal(value));
  }
}

export class Pool extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tvl", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("pilotPerBlock", Value.fromBigInt(BigInt.zero()));
    this.set("apr", Value.fromBigInt(BigInt.zero()));
    this.set("multiplier", Value.fromBigInt(BigInt.zero()));
    this.set("sqrtPrice", Value.fromBigInt(BigInt.zero()));
    this.set("reserve0", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("reserve1", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("token0Price", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("token1Price", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("token0", Value.fromString(""));
    this.set("token1", Value.fromString(""));
    this.set("nftCount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Pool entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Pool entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Pool", id.toString(), this);
    }
  }

  static load(id: string): Pool | null {
    return changetype<Pool | null>(store.get("Pool", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tvl(): BigDecimal {
    let value = this.get("tvl");
    return value!.toBigDecimal();
  }

  set tvl(value: BigDecimal) {
    this.set("tvl", Value.fromBigDecimal(value));
  }

  get pilotPerBlock(): BigInt {
    let value = this.get("pilotPerBlock");
    return value!.toBigInt();
  }

  set pilotPerBlock(value: BigInt) {
    this.set("pilotPerBlock", Value.fromBigInt(value));
  }

  get apr(): BigInt {
    let value = this.get("apr");
    return value!.toBigInt();
  }

  set apr(value: BigInt) {
    this.set("apr", Value.fromBigInt(value));
  }

  get multiplier(): BigInt {
    let value = this.get("multiplier");
    return value!.toBigInt();
  }

  set multiplier(value: BigInt) {
    this.set("multiplier", Value.fromBigInt(value));
  }

  get sqrtPrice(): BigInt {
    let value = this.get("sqrtPrice");
    return value!.toBigInt();
  }

  set sqrtPrice(value: BigInt) {
    this.set("sqrtPrice", Value.fromBigInt(value));
  }

  get reserve0(): BigDecimal {
    let value = this.get("reserve0");
    return value!.toBigDecimal();
  }

  set reserve0(value: BigDecimal) {
    this.set("reserve0", Value.fromBigDecimal(value));
  }

  get reserve1(): BigDecimal {
    let value = this.get("reserve1");
    return value!.toBigDecimal();
  }

  set reserve1(value: BigDecimal) {
    this.set("reserve1", Value.fromBigDecimal(value));
  }

  get token0Price(): BigDecimal {
    let value = this.get("token0Price");
    return value!.toBigDecimal();
  }

  set token0Price(value: BigDecimal) {
    this.set("token0Price", Value.fromBigDecimal(value));
  }

  get token1Price(): BigDecimal {
    let value = this.get("token1Price");
    return value!.toBigDecimal();
  }

  set token1Price(value: BigDecimal) {
    this.set("token1Price", Value.fromBigDecimal(value));
  }

  get token0(): string {
    let value = this.get("token0");
    return value!.toString();
  }

  set token0(value: string) {
    this.set("token0", Value.fromString(value));
  }

  get token1(): string {
    let value = this.get("token1");
    return value!.toString();
  }

  set token1(value: string) {
    this.set("token1", Value.fromString(value));
  }

  get nftCount(): BigInt {
    let value = this.get("nftCount");
    return value!.toBigInt();
  }

  set nftCount(value: BigInt) {
    this.set("nftCount", Value.fromBigInt(value));
  }

  get nft(): Array<string> {
    let value = this.get("nft");
    return value!.toStringArray();
  }

  set nft(value: Array<string>) {
    this.set("nft", Value.fromStringArray(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("address", Value.fromString(""));
    this.set("nftCount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save User entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): string {
    let value = this.get("address");
    return value!.toString();
  }

  set address(value: string) {
    this.set("address", Value.fromString(value));
  }

  get nftCount(): BigInt {
    let value = this.get("nftCount");
    return value!.toBigInt();
  }

  set nftCount(value: BigInt) {
    this.set("nftCount", Value.fromBigInt(value));
  }

  get nft(): Array<string> {
    let value = this.get("nft");
    return value!.toStringArray();
  }

  set nft(value: Array<string>) {
    this.set("nft", Value.fromStringArray(value));
  }
}

export class Nft extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("user", Value.fromString(""));
    this.set("pool", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Nft entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Nft entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Nft", id.toString(), this);
    }
  }

  static load(id: string): Nft | null {
    return changetype<Nft | null>(store.get("Nft", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get user(): string {
    let value = this.get("user");
    return value!.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get pool(): string {
    let value = this.get("pool");
    return value!.toString();
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("symbol", Value.fromString(""));
    this.set("name", Value.fromString(""));
    this.set("decimals", Value.fromBigInt(BigInt.zero()));
    this.set("totalSupply", Value.fromBigInt(BigInt.zero()));
    this.set("drivedETH", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("drivedUSD", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Token entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get decimals(): BigInt {
    let value = this.get("decimals");
    return value!.toBigInt();
  }

  set decimals(value: BigInt) {
    this.set("decimals", Value.fromBigInt(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value!.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get drivedETH(): BigDecimal {
    let value = this.get("drivedETH");
    return value!.toBigDecimal();
  }

  set drivedETH(value: BigDecimal) {
    this.set("drivedETH", Value.fromBigDecimal(value));
  }

  get drivedUSD(): BigDecimal {
    let value = this.get("drivedUSD");
    return value!.toBigDecimal();
  }

  set drivedUSD(value: BigDecimal) {
    this.set("drivedUSD", Value.fromBigDecimal(value));
  }
}
