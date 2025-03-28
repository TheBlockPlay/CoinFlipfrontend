
"use client";
import { ACTIONS } from '@/constants';
import { getTransactionsByAddress } from '@/server/game/get-game-contract-by-transaction'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function RecentPlay() {
    const [transactions, setTransactions] = useState([]);
    const url = 'https://browser.partisiablockchain.com/transactions/';
    useEffect(() => {
        getTransactions();
    }, []);

    const getTransactions = async () => {
        const transactionData = await getTransactionsByAddress(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!);
        setTransactions(transactionData)
    }
    return (
        <div className='recent-plays-overflow'>
            {
                transactions.length ? transactions.map((transaction: any, index) =>
                    <div key={index} className="flex justify-between items-center w-full gap-3 my-[5px] border-b border-b-[#FFFFFF14] py-[12px]">
                        <div className="flex gap-3 items-center">
                            <Image height={34} width={34} src="/assets/images/greenArrow.png" alt="greenArrow" className="" />
                            <div className="flex flex-col">
                                <Link href={url + transaction.node?.identifier} passHref={true} target='blank' ><p className="text-white font-semibold text-[16px] leading-[100%] tracking-[0%] mb-[5px]">
                                    {transaction.node?.identifier?.slice(0,12)} ***
                                </p></Link>
                                <p className="text-white font-light text-[14px] leading-[100%] tracking-[0%]">{ACTIONS[transaction?.node?.event?.action]}</p>
                            </div>
                        </div>
                        <div className="text-[#27A251] text-[16px] leading-[100%] tracking-[0%]">{transaction?.node?.event?.cost} MATIC</div>
                    </div>
                ) : <><p className='text-center text-muted'>No recent plays found.</p></>
            }
        </div>
    )
}