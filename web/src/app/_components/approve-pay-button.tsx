'use client';

import { ChainActionButton } from '@/components/chain-action-button';
import { useIdentity } from '@/components/context/identity/identity.context';
import { payoutApprove } from '@/server/create-arcade/deploy-game';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ZK_CONTRACT = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;

export const ApprovePayButton = () => {
  const [betAmount,setBetAmount]=useState<any>(10);
  const router = useRouter();
  const identity = useIdentity();
  
  useEffect(()=>{
      let b= Number(window.localStorage.getItem('bet_amount')||10);
      setBetAmount(b);
  },[])

  if (!identity) return <h6 className='text-red-600'>Please connect wallet</h6>;

  return (
    <ChainActionButton
      action={() =>payoutApprove(ZK_CONTRACT,identity.address,betAmount)}
      onSuccess={async(txHash) => {
          setTimeout(()=>{
             router.push(`/starting`);
          },500)
      }}
    >
      Approve Game
    </ChainActionButton>
  );
};
