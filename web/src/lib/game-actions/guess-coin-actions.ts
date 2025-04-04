import { ChainAction } from '@/server/chain-actions/types';
import { ContractAbi } from '@partisiablockchain/abi-client';
import { BlockchainPublicKey } from '@partisiablockchain/zk-client';
import { BaseActions } from './base-actions';

export class GuessCoinActions extends BaseActions {
  constructor(
    public readonly contract: string,
    address: string | undefined | null,
    public readonly abi: ContractAbi,
    public readonly engineKeys: BlockchainPublicKey[],
  ) {
    super(contract, address, abi, engineKeys);
  }

  public secretNumberInput(secret: number): Promise<ChainAction> {
    const rpc = this.inputZkSecret('on_secret_input', secret);
    return this.actionWithHexPayload(rpc, {
      cost: 35_000,
    });
  }

  public startGameAndPlace(): Promise<ChainAction> {
    const rpc = this.inputZk('start_game_and_place_bet');
    return this.actionWithHexPayload(rpc, {
      cost: 100_000,
    });
  }
}
