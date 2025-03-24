'use client';
import { useIdentity } from '@/components/context/identity/identity.context';
import { useEffect, useState } from 'react';

export const RecentTransaction = () => {
  const identity = useIdentity();
  const [betAmount, setBetAmount] = useState(10);
  useEffect(() => {
    let b = Number(window.localStorage.getItem('bet_amount') || 10);
    setBetAmount(b);
  }, [])
  if (!identity) return "";
  return (
    <>
      <div className='text-white '>
        <div className='border-bottom d-flex justify-content-between px-2 mb-1'>
          <span>Wallet #fddgfdgfdg</span>
          <span>
            17 day ago
          </span>
        </div>
        <div className='border-bottom d-flex justify-content-between px-2 mb-1'>
          <span>Wallet #fddg34324234</span>
          <span>
            17 day ago
          </span>
        </div>
        <div className='border-bottom d-flex justify-content-between px-2 mb-1'>
          <span>Wallet #fd324234gfdg</span>
          <span>
            17 day ago
          </span>
        </div>
      </div>
    </>
  );
};
