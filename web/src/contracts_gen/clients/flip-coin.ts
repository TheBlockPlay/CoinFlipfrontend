/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import BN from "bn.js";
import {
  AbiParser,
  AbstractBuilder, BigEndianReader,
  FileAbi, FnKinds, FnRpcBuilder, RpcReader,
  ScValue,
  ScValueEnum, ScValueOption,
  ScValueStruct,
  StateReader, TypeIndex,
  StateBytes,
  BlockchainAddress
} from "@partisiablockchain/abi-client";
import { CONTRACT_ABI_CODE } from "@/constants";

const fileAbi: FileAbi = new AbiParser(Buffer.from(
  CONTRACT_ABI_CODE,
  "hex"
)).parseAbi();

type Option<K> = K | undefined;

export type PlayerChoice = 
  | PlayerChoiceHeads
  | PlayerChoiceTails;

export enum PlayerChoiceD {
  Heads = 0,
  Tails = 1
}

function buildRpcPlayerChoice(val: PlayerChoice, builder: AbstractBuilder) {
  if (val.discriminant === PlayerChoiceD.Heads) {
    buildRpcPlayerChoiceHeads(val, builder);
  }
  if (val.discriminant === PlayerChoiceD.Tails) {
    buildRpcPlayerChoiceTails(val, builder);
  }
}

function fromScValuePlayerChoice(enumValue: ScValueEnum): PlayerChoice {
  const item = enumValue.item;
  if (item.name === "Heads") {
    return fromScValuePlayerChoiceHeads(item);
  }
  if (item.name === "Tails") {
    return fromScValuePlayerChoiceTails(item);
  }
  throw Error("Should not happen");
}

export interface PlayerChoiceHeads {
  discriminant: PlayerChoiceD.Heads;
}

export function newPlayerChoiceHeads(): PlayerChoiceHeads {
  return {discriminant: 0, };
}

function buildRpcPlayerChoiceHeads(value: PlayerChoiceHeads, builder: AbstractBuilder) {
  const enumVariantBuilder = builder.addEnumVariant(PlayerChoiceD.Heads);
}

function fromScValuePlayerChoiceHeads(structValue: ScValueStruct): PlayerChoiceHeads {
  return {
    discriminant: PlayerChoiceD.Heads,
  };
}

export interface PlayerChoiceTails {
  discriminant: PlayerChoiceD.Tails;
}

export function newPlayerChoiceTails(): PlayerChoiceTails {
  return {discriminant: 1, };
}

function buildRpcPlayerChoiceTails(value: PlayerChoiceTails, builder: AbstractBuilder) {
  const enumVariantBuilder = builder.addEnumVariant(PlayerChoiceD.Tails);
}

function fromScValuePlayerChoiceTails(structValue: ScValueStruct): PlayerChoiceTails {
  return {
    discriminant: PlayerChoiceD.Tails,
  };
}

export interface PlayerBet {
  amount: BN;
  choice: PlayerChoice;
}

export function newPlayerBet(amount: BN, choice: PlayerChoice): PlayerBet {
  return {amount, choice};
}

function fromScValuePlayerBet(structValue: ScValueStruct): PlayerBet {
  return {
    amount: structValue.getFieldValue("amount")!.asBN(),
    choice: fromScValuePlayerChoice(structValue.getFieldValue("choice")!.enumValue()),
  };
}

export interface RandomContribution {
  result: number;
}

export function newRandomContribution(result: number): RandomContribution {
  return {result};
}

function fromScValueRandomContribution(structValue: ScValueStruct): RandomContribution {
  return {
    result: structValue.getFieldValue("result")!.asNumber(),
  };
}

export type GamePhase = 
  | GamePhaseStart
  | GamePhasePlaceBets
  | GamePhaseFlipCoin
  | GamePhaseDone;

export enum GamePhaseD {
  Start = 0,
  PlaceBets = 1,
  FlipCoin = 2,
  Done = 3
}

function fromScValueGamePhase(enumValue: ScValueEnum): GamePhase {
  const item = enumValue.item;
  if (item.name === "Start") {
    return fromScValueGamePhaseStart(item);
  }
  if (item.name === "PlaceBets") {
    return fromScValueGamePhasePlaceBets(item);
  }
  if (item.name === "FlipCoin") {
    return fromScValueGamePhaseFlipCoin(item);
  }
  if (item.name === "Done") {
    return fromScValueGamePhaseDone(item);
  }
  throw Error("Should not happen");
}

export interface GamePhaseStart {
  discriminant: GamePhaseD.Start;
}

export function newGamePhaseStart(): GamePhaseStart {
  return {discriminant: 0, };
}

function fromScValueGamePhaseStart(structValue: ScValueStruct): GamePhaseStart {
  return {
    discriminant: GamePhaseD.Start,
  };
}

export interface GamePhasePlaceBets {
  discriminant: GamePhaseD.PlaceBets;
}

export function newGamePhasePlaceBets(): GamePhasePlaceBets {
  return {discriminant: 1, };
}

function fromScValueGamePhasePlaceBets(structValue: ScValueStruct): GamePhasePlaceBets {
  return {
    discriminant: GamePhaseD.PlaceBets,
  };
}

export interface GamePhaseFlipCoin {
  discriminant: GamePhaseD.FlipCoin;
}

export function newGamePhaseFlipCoin(): GamePhaseFlipCoin {
  return {discriminant: 2, };
}

function fromScValueGamePhaseFlipCoin(structValue: ScValueStruct): GamePhaseFlipCoin {
  return {
    discriminant: GamePhaseD.FlipCoin,
  };
}

export interface GamePhaseDone {
  discriminant: GamePhaseD.Done;
}

export function newGamePhaseDone(): GamePhaseDone {
  return {discriminant: 3, };
}

function fromScValueGamePhaseDone(structValue: ScValueStruct): GamePhaseDone {
  return {
    discriminant: GamePhaseD.Done,
  };
}

export interface CoinFlipState {
  playerBets: Map<BlockchainAddress, PlayerBet>;
  flipResults: Map<BlockchainAddress, boolean>;
  winners: Map<BlockchainAddress, BlockchainAddress>;
  userBalances: Map<BlockchainAddress, BN>;
  gamePhases: Map<BlockchainAddress, GamePhase>;
  tokenAddress: BlockchainAddress;
}

export function newCoinFlipState(playerBets: Map<BlockchainAddress, PlayerBet>, flipResults: Map<BlockchainAddress, boolean>, winners: Map<BlockchainAddress, BlockchainAddress>, userBalances: Map<BlockchainAddress, BN>, gamePhases: Map<BlockchainAddress, GamePhase>, tokenAddress: BlockchainAddress): CoinFlipState {
  return {playerBets, flipResults, winners, userBalances, gamePhases, tokenAddress};
}

function fromScValueCoinFlipState(structValue: ScValueStruct): CoinFlipState {
  return {
    playerBets: new Map([...structValue.getFieldValue("player_bets")!.mapValue().map].map(([k1, v2]) => [BlockchainAddress.fromBuffer(k1.addressValue().value), fromScValuePlayerBet(v2.structValue())])),
    flipResults: new Map([...structValue.getFieldValue("flip_results")!.mapValue().map].map(([k3, v4]) => [BlockchainAddress.fromBuffer(k3.addressValue().value), v4.boolValue()])),
    winners: new Map([...structValue.getFieldValue("winners")!.mapValue().map].map(([k5, v6]) => [BlockchainAddress.fromBuffer(k5.addressValue().value), BlockchainAddress.fromBuffer(v6.addressValue().value)])),
    userBalances: new Map([...structValue.getFieldValue("user_balances")!.mapValue().map].map(([k7, v8]) => [BlockchainAddress.fromBuffer(k7.addressValue().value), v8.asBN()])),
    gamePhases: new Map([...structValue.getFieldValue("game_phases")!.mapValue().map].map(([k9, v10]) => [BlockchainAddress.fromBuffer(k9.addressValue().value), fromScValueGamePhase(v10.enumValue())])),
    tokenAddress: BlockchainAddress.fromBuffer(structValue.getFieldValue("token_address")!.addressValue().value),
  };
}

export function deserializeCoinFlipState(state: StateBytes): CoinFlipState {
  const scValue = new StateReader(state.state, fileAbi.contract, state.avlTrees).readState();
  return fromScValueCoinFlipState(scValue);
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

function fromScValueExternalEventId(structValue: ScValueStruct): ExternalEventId {
  return {
    rawId: structValue.getFieldValue("raw_id")!.asNumber(),
  };
}

export function initialize(tokenAddress: BlockchainAddress): Buffer {
  const fnBuilder = new FnRpcBuilder("initialize", fileAbi.contract);
  fnBuilder.addAddress(tokenAddress.asBuffer());
  return fnBuilder.getBytes();
}

export function startGameAndPlaceBet(betAmount: BN, choice: PlayerChoice): Buffer {
  const fnBuilder = new FnRpcBuilder("start_game_and_place_bet", fileAbi.contract);
  fnBuilder.addU64(betAmount);
  buildRpcPlayerChoice(choice, fnBuilder);
  return fnBuilder.getBytes();
}

export function flipCoin(): Buffer {
  const fnBuilder = new FnRpcBuilder("flip_coin", fileAbi.contract);
  return fnBuilder.getBytes();
}

export function payoutWinner(): Buffer {
  const fnBuilder = new FnRpcBuilder("payout_winner", fileAbi.contract);
  return fnBuilder.getBytes();
}

