import BN from "bn.js";
import {
  AbiParser,
  AbstractBuilder,
  FileAbi, FnRpcBuilder,
  ScValueStruct,
  StateReader, 
  StateBytes,
  BlockchainAddress
} from "@partisiablockchain/abi-client";
import { TOKEN_ABI_CODE } from "@/constants";

const fileAbi: FileAbi = new AbiParser(Buffer.from(
  TOKEN_ABI_CODE,
  "hex"
)).parseAbi();

type Option<K> = K | undefined;

export interface AllowedAddress {
  owner: BlockchainAddress;
  spender: BlockchainAddress;
}

export function newAllowedAddress(owner: BlockchainAddress, spender: BlockchainAddress): AllowedAddress {
  return {owner, spender};
}

function fromScValueAllowedAddress(structValue: ScValueStruct): AllowedAddress {
  return {
    owner: BlockchainAddress.fromBuffer(structValue.getFieldValue("owner")!.addressValue().value),
    spender: BlockchainAddress.fromBuffer(structValue.getFieldValue("spender")!.addressValue().value),
  };
}

export interface Transfer {
  to: BlockchainAddress;
  amount: BN;
}

export function newTransfer(to: BlockchainAddress, amount: BN): Transfer {
  return {to, amount};
}

function fromScValueTransfer(structValue: ScValueStruct): Transfer {
  return {
    to: BlockchainAddress.fromBuffer(structValue.getFieldValue("to")!.addressValue().value),
    amount: structValue.getFieldValue("amount")!.asBN(),
  };
}

function buildRpcTransfer(value: Transfer, builder: AbstractBuilder) {
  const structBuilder = builder.addStruct();
  structBuilder.addAddress(value.to.asBuffer());
  structBuilder.addU128(value.amount);
}

export interface TokenState {
  name: string;
  decimals: number;
  symbol: string;
  owner: BlockchainAddress;
  totalSupply: BN;
  airdropPercentage: number;
  platformSalesPercentage: number;
  stakingRewardsPercentage: number;
  ownerPercentage: number;
  airdropAddress: BlockchainAddress;
  platformSalesAddress: BlockchainAddress;
  stakingRewardsAddress: BlockchainAddress;
  balances: Option<Map<BlockchainAddress, BN>>;
  allowed: Option<Map<AllowedAddress, BN>>;
}

export function newTokenState(name: string, decimals: number, symbol: string, owner: BlockchainAddress, totalSupply: BN, airdropPercentage: number, platformSalesPercentage: number, stakingRewardsPercentage: number, ownerPercentage: number, airdropAddress: BlockchainAddress, platformSalesAddress: BlockchainAddress, stakingRewardsAddress: BlockchainAddress, balances: Option<Map<BlockchainAddress, BN>>, allowed: Option<Map<AllowedAddress, BN>>): TokenState {
  return {name, decimals, symbol, owner, totalSupply, airdropPercentage, platformSalesPercentage, stakingRewardsPercentage, ownerPercentage, airdropAddress, platformSalesAddress, stakingRewardsAddress, balances, allowed};
}

function fromScValueTokenState(structValue: ScValueStruct): TokenState {
  return {
    name: structValue.getFieldValue("name")!.stringValue(),
    decimals: structValue.getFieldValue("decimals")!.asNumber(),
    symbol: structValue.getFieldValue("symbol")!.stringValue(),
    owner: BlockchainAddress.fromBuffer(structValue.getFieldValue("owner")!.addressValue().value),
    totalSupply: structValue.getFieldValue("total_supply")!.asBN(),
    airdropPercentage: structValue.getFieldValue("airdrop_percentage")!.asNumber(),
    platformSalesPercentage: structValue.getFieldValue("platform_sales_percentage")!.asNumber(),
    stakingRewardsPercentage: structValue.getFieldValue("staking_rewards_percentage")!.asNumber(),
    ownerPercentage: structValue.getFieldValue("owner_percentage")!.asNumber(),
    airdropAddress: BlockchainAddress.fromBuffer(structValue.getFieldValue("airdrop_address")!.addressValue().value),
    platformSalesAddress: BlockchainAddress.fromBuffer(structValue.getFieldValue("platform_sales_address")!.addressValue().value),
    stakingRewardsAddress: BlockchainAddress.fromBuffer(structValue.getFieldValue("staking_rewards_address")!.addressValue().value),
    balances: structValue.getFieldValue("balances")!.avlTreeMapValue().mapKeysValues((k1) => BlockchainAddress.fromBuffer(k1.addressValue().value), (v2) => v2.asBN()),
    allowed: structValue.getFieldValue("allowed")!.avlTreeMapValue().mapKeysValues((k3) => fromScValueAllowedAddress(k3.structValue()), (v4) => v4.asBN()),
  };
}

export function deserializeTokenState(state: StateBytes): TokenState {
  const scValue = new StateReader(state.state, fileAbi.contract, state.avlTrees).readState();
  return fromScValueTokenState(scValue);
}

export interface SecretVarId {
  rawId: number;
}

export function newSecretVarId(rawId: number): SecretVarId {
  return {rawId};
}

function fromScValueSecretVarId(structValue: ScValueStruct): SecretVarId {
  return {
    rawId: structValue.getFieldValue("raw_id")!.asNumber(),
  };
}

export interface EventSubscriptionId {
  rawId: number;
}

export function newEventSubscriptionId(rawId: number): EventSubscriptionId {
  return {rawId};
}

function fromScValueEventSubscriptionId(structValue: ScValueStruct): EventSubscriptionId {
  return {
    rawId: structValue.getFieldValue("raw_id")!.asNumber(),
  };
}

export interface ExternalEventId {
  rawId: number;
}

export function newExternalEventId(rawId: number): ExternalEventId {
  return {rawId};
}


export function initialize(name: string, symbol: string, decimals: number, totalSupply: BN, airdropPercentage: number, platformSalesPercentage: number, stakingRewardsPercentage: number, ownerPercentage: number, airdropAddress: BlockchainAddress, platformSalesAddress: BlockchainAddress, stakingRewardsAddress: BlockchainAddress): Buffer {
  const fnBuilder = new FnRpcBuilder("initialize", fileAbi.contract);
  fnBuilder.addString(name);
  fnBuilder.addString(symbol);
  fnBuilder.addU8(decimals);
  fnBuilder.addU128(totalSupply);
  fnBuilder.addU8(airdropPercentage);
  fnBuilder.addU8(platformSalesPercentage);
  fnBuilder.addU8(stakingRewardsPercentage);
  fnBuilder.addU8(ownerPercentage);
  fnBuilder.addAddress(airdropAddress.asBuffer());
  fnBuilder.addAddress(platformSalesAddress.asBuffer());
  fnBuilder.addAddress(stakingRewardsAddress.asBuffer());
  return fnBuilder.getBytes();
}

export function transfer(to: BlockchainAddress, amount: BN): Buffer {
  const fnBuilder = new FnRpcBuilder("transfer", fileAbi.contract);
  fnBuilder.addAddress(to.asBuffer());
  fnBuilder.addU128(amount);
  return fnBuilder.getBytes();
}

export function bulkTransfer(transfers: Transfer[]): Buffer {
  const fnBuilder = new FnRpcBuilder("bulk_transfer", fileAbi.contract);
  const vecBuilder5 = fnBuilder.addVec();
  for (const vecEntry6 of transfers) {
    buildRpcTransfer(vecEntry6, vecBuilder5);
  }
  return fnBuilder.getBytes();
}

export function transferFrom(from: BlockchainAddress, to: BlockchainAddress, amount: BN): Buffer {
  const fnBuilder = new FnRpcBuilder("transfer_from", fileAbi.contract);
  fnBuilder.addAddress(from.asBuffer());
  fnBuilder.addAddress(to.asBuffer());
  fnBuilder.addU128(amount);
  return fnBuilder.getBytes();
}

export function bulkTransferFrom(from: BlockchainAddress, transfers: Transfer[]): Buffer {
  const fnBuilder = new FnRpcBuilder("bulk_transfer_from", fileAbi.contract);
  fnBuilder.addAddress(from.asBuffer());
  const vecBuilder7 = fnBuilder.addVec();
  for (const vecEntry8 of transfers) {
    buildRpcTransfer(vecEntry8, vecBuilder7);
  }
  return fnBuilder.getBytes();
}

export function approve(spender: BlockchainAddress, amount: BN): Buffer {
  console.log(JSON.stringify(fileAbi.contract));
  const fnBuilder = new FnRpcBuilder("approve", fileAbi.contract);
  fnBuilder.addAddress(spender.asBuffer());
  fnBuilder.addU128(amount);
  return fnBuilder.getBytes();
}

export function approveRelative(spender: BlockchainAddress, delta: BN): Buffer {
  const fnBuilder = new FnRpcBuilder("approve_relative", fileAbi.contract);
  fnBuilder.addAddress(spender.asBuffer());
  fnBuilder.addI128(delta);
  return fnBuilder.getBytes();
}

