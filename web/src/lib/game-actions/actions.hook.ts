import { useGameState } from '@/components/context/game-state.context';
import { useFlipCoinAbi } from '@/components/context/flip-coin.context';
import { useIdentity } from '@/components/context/identity/identity.context';
import { GuessCoinActions } from './guess-coin-actions';

export const useGuessTheNumberActions = () => {
  const address = useIdentity()?.address;
  const abi = useFlipCoinAbi();
  const { contractId, engineKeys } = useGameState();

  return new GuessCoinActions(contractId, address, abi, engineKeys);
};
