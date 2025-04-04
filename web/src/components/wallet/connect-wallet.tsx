'use client';

import Link from 'next/link';
import PartisiaSdk from 'partisia-blockchain-applications-sdk';
import { FC, useState } from 'react';
import { login } from '../../server/user/auth';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';

type Props = {
  text?: string;
  className?: string;
};

export const ConnectWallet: FC<Props> = ({ text, className }) => {
  const [error, setError] = useState<'no-wallet'>();

  return (
    <div className={className}>
      {text && <p className='pb-2'>{text}</p>}
      <Button
        onClick={async () => {
          try {
            const sdk = new PartisiaSdk();
            await sdk.connect({
              chainId: 'Partisia Blockchain',
              permissions: ['sign' as any],
              dappName: 'Block Play',
            });

            setError(undefined);

            const { connection, seed } = sdk;
            if (!connection) return false;

            await login({
              kind: 'partisia',
              address: connection.account.address,
              seed,
              wallet: connection,
            });
            return true;
          } catch (error: any) {
            console.log(error);
            if (error.message === 'Extension not Found') {
              setError('no-wallet');
              return false;
            }
            return false;
          }
        }}
      >
        Connect Wallet
      </Button>
      {error === 'no-wallet' && (
        <Dialog open={true} onOpenChange={() => setError(undefined)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Connect Wallet</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <div>
                <p className='mt-2 text-sm font-medium text-red-700'>
                   Error: A required package is missing. Please install it to proceed.
                  <Link
                    href={
                      'https://chromewebstore.google.com/detail/partisia-wallet/gjkdbeaiifkpoencioahhcilildpjhgh'
                    }
                    target='_blank'
                    className='font-semibold text-red-900 underline underline-offset-2'
                  >
                    Partisia Wallet
                  </Link>{' '}
                  to use this site.
                </p>
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};
