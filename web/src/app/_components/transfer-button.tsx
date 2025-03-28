'use client';
import { ChainActionButton } from '@/components/chain-action-button';
import { useIdentity } from '@/components/context/identity/identity.context';
import { payoutTransfer } from '@/server/create-arcade/deploy-game';
import { getGameContractByTransaction } from '@/server/game/get-game-contract-by-transaction';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ZK_CONTRACT = process.env.NEXT_PUBLIC_TOKEN_ADDRESS!;

export const TransferButton = () => {
  const [amount,setAmount]=useState<any>(10);
  useEffect(()=>{
    let b=window.localStorage.getItem('amount')||10;
    setAmount(b);
  },[]);
  const router = useRouter();
  const identity = useIdentity();
  if (!identity) return '';
  return (
    <ChainActionButton
      action={() =>payoutTransfer(ZK_CONTRACT,identity.address,amount)}
      onSuccess={async(txHash) => {
        const result = await getGameContractByTransaction(txHash);
        console.log("payout winner game success",txHash, result);
        router.push(`/`);
      }}
    >
      GET TOKEN
    </ChainActionButton>
  );
};
