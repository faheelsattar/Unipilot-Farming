/* eslint-disable prefer-const */
import { ERC20 } from "../../generated/UnipilotFarm/ERC20";
import { ERC20SymbolBytes } from "../../generated/UnipilotFarm/ERC20SymbolBytes";
import { ERC20NameBytes } from "../../generated/UnipilotFarm/ERC20NameBytes";
import { StaticTokenDefinition } from "./staticTokenDefinition";
import { BigInt, Address } from "@graphprotocol/graph-ts";
import { isNullEthValue } from ".";
import { Token } from "../../generated/schema";

export function fetchTokenSymbol(tokenAddress: Address): string {
  let contract = ERC20.bind(tokenAddress);
  let contractSymbolBytes = ERC20SymbolBytes.bind(tokenAddress);

  // try types string and bytes32 for symbol
  let symbolValue = "unknown";
  let symbolResult = contract.try_symbol();
  if (symbolResult.reverted) {
    let symbolResultBytes = contractSymbolBytes.try_symbol();
    if (!symbolResultBytes.reverted) {
      // for broken pairs that have no symbol function exposed
      if (!isNullEthValue(symbolResultBytes.value.toHexString())) {
        symbolValue = symbolResultBytes.value.toString();
      } else {
        // try with the static definition
        let staticTokenDefinition = StaticTokenDefinition.fromAddress(
          tokenAddress
        );
        if (staticTokenDefinition != null) {
          symbolValue = staticTokenDefinition.symbol;
        }
      }
    }
  } else {
    symbolValue = symbolResult.value;
  }

  return symbolValue;
}

export function fetchTokenName(tokenAddress: Address): string {
  let contract = ERC20.bind(tokenAddress);
  let contractNameBytes = ERC20NameBytes.bind(tokenAddress);

  // try types string and bytes32 for name
  let nameValue = "unknown";
  let nameResult = contract.try_name();
  if (nameResult.reverted) {
    let nameResultBytes = contractNameBytes.try_name();
    if (!nameResultBytes.reverted) {
      // for broken exchanges that have no name function exposed
      if (!isNullEthValue(nameResultBytes.value.toHexString())) {
        nameValue = nameResultBytes.value.toString();
      } else {
        // try with the static definition
        let staticTokenDefinition = StaticTokenDefinition.fromAddress(
          tokenAddress
        );
        if (staticTokenDefinition != null) {
          nameValue = staticTokenDefinition.name;
        }
      }
    }
  } else {
    nameValue = nameResult.value;
  }

  return nameValue;
}

export function fetchTokenTotalSupply(tokenAddress: Address): BigInt {
  let contract = ERC20.bind(tokenAddress);
  let totalSupplyValue = BigInt.fromI32(0);
  let totalSupplyResult = contract.try_totalSupply();
  if (!totalSupplyResult.reverted) {
    totalSupplyValue = totalSupplyResult.value;
  }
  return totalSupplyValue;
}

export function fetchTokenDecimals(tokenAddress: Address): BigInt {
  let contract = ERC20.bind(tokenAddress);
  // try types uint8 for decimals
  let decimalValue = BigInt.fromI32(0);
  let decimalResult = contract.try_decimals();
  if (!decimalResult.reverted) {
    decimalValue = BigInt.fromI32(decimalResult.value);
  } else {
    // try with the static definition
    let staticTokenDefinition = StaticTokenDefinition.fromAddress(tokenAddress);
    if (staticTokenDefinition != null) {
      return staticTokenDefinition.decimals;
    }
  }
  return decimalValue;
}

export function MakeTokens(_token: Address): string {
  let token = Token.load(_token.toHexString());
  if (!token) {
    token = new Token(_token.toHexString());
    token.name = fetchTokenName(_token);
    token.symbol = fetchTokenSymbol(_token);
    token.decimals = fetchTokenDecimals(_token);
    token.save();
  }
  return token.id;
}
