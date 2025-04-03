"use client";
import { GAMES } from '@/config';
import { addGame } from '@/server/create-arcade/add-game';
import Link from 'next/link';
import React, { useState } from 'react';

const StartPhase = () => {
    const [betAmount, setBetAmount] = useState<string>('10');

    const changeBetAmount = (bet: string) => {
        setBetAmount(bet);
        localStorage.setItem('bet_amount', bet);
    }

    return (
        <>
            <div className="flex justify-between items-center w-full gap-3 my-[20px] border border-[1.71px] border-[#EDEEEF33] p-[14px] rounded-[8px]">
                <input className="bg-transparent" type="number" min={5} max={10000}
                    value={betAmount}
                    onChange={(e) => changeBetAmount(e.target.value)}
                />
                <label>PBT</label>
            </div>
            <input type="range" min="5" value={betAmount} max="10000" className="w-full"
                onChange={(e) => changeBetAmount(e.target.value)} />

            <Link href={'/approve'}>
                <button onClick={() => {
                    addGame(GAMES[0])
                }} className="flex justify-center mt-[30px] gap-3 items-center bg-[#F4C542] border border-[#F4C542] hover:text-[#F4C542] hover:bg-transparent p-[14px] w-full rounded-[8px] text-white font-semibold text-[16px] leading-[100%] tracking-[0%] text-center transition duration-300">
                    Start Game
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            </Link>
        </>
    )
}

export default StartPhase
