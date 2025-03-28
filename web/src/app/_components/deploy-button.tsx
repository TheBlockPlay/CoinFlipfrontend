'use client';

import { ChainActionButton } from '@/components/chain-action-button';
import { useIdentity } from '@/components/context/identity/identity.context';
import { deployGame } from '@/server/create-arcade/deploy-game';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import BetAmount from './BetAmount';
import clsx from 'clsx';

const ZK_CONTRACT = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;

export const DeployButton = () => {
  const router = useRouter();
  const identity = useIdentity();
  const [betAmount, setBetAmount] = useState<any>(10);
  const [choice, setChoice] = useState<any>();
  useEffect(() => {
    let b = Number(window.localStorage.getItem('bet_amount') || 10);
    setBetAmount(b);
  }, [])

  if (!identity) return <h6 className='text-red-600'>Please connect wallet</h6>;

  return (
    <>
      <h4 className="text-white font-semibold text-[20px] leading-[100%] tracking-[0%]">Choose Side</h4>
      <div className="flex justify-center items-center w-full gap-3  my-[20px]">
        <button className={clsx("bg-[#F4C542] border border-[#F4C542] hover:text-[#F4C542] hover:bg-transparent p-[14px] w-full rounded-[8px] text-white font-semibold text-[16px] leading-[100%] tracking-[0%] text-center transition duration-300", choice==0 && "bg-transparent" )}
          onClick={() => setChoice(1)}
        >Heads</button>
        <button className={clsx("rounded-[8px] p-[14px] text-[#00A9FF] border border-[#00A9FF] w-full font-semibold text-[16px] leading-[100%] tracking-[0%] text-center hover:text-white hover:bg-[#00A9FF] transition duration-300",choice==0 && "bg-[#00A9FF] text-white")}
          onClick={() => setChoice(0)}
        >Tails</button>
      </div>
      <h4 className="relative mt-4 text-white font-semibold text-[20px] leading-[100%] tracking-[0%]">Bet Amount</h4>

      <BetAmount />
      <div className='flex justify-center'>
        {
          choice === undefined ? <>
            <p>Select Bet Coin</p>
          </> :
            <ChainActionButton
              action={() => deployGame(identity.address, ZK_CONTRACT, betAmount, { discriminant: choice })}
              onSuccess={(txHash) => {
                router.push(`/flip-coin`);
              }}
            >
              Place Bet
            </ChainActionButton>
        }
      </div>
    </>
  );
};
