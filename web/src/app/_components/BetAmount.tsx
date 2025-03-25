"use client"
import React, { useEffect, useState } from 'react'

const BetAmount = () => {
    const [amount, setAmount]= useState('');
    useEffect(()=>{
      const v= localStorage.getItem("bet_amount")||"";
      setAmount(v);
    },[])
    return (
        <div className="flex justify-between items-center w-full gap-3 my-[20px] border border-[1.71px] border-[#EDEEEF33] p-[14px] rounded-[8px]">
            <input className="bg-transparent" readOnly type="number" min={5} max={10000}
                value={amount}
            />
            <label>Matic</label>
        </div>
    )
}

export default BetAmount
