import fs from 'fs';
import React, { PropsWithChildren } from 'react';
import { FlipCoinProvider } from './flip-coin.context';

const flipCoinAbi = fs.readFileSync(
  process.cwd() + '/src/contracts_gen/flip-coin/flip_coin.abi',
);

export const FlipCoinServerProvider: React.FC<PropsWithChildren> = async ({
  children,
}) => {
  return (
    <FlipCoinProvider abiBuffer={flipCoinAbi.toString('base64')}>
      {children}
    </FlipCoinProvider>
  );
};
