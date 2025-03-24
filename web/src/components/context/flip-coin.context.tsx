'use client';

import { AbiParser, ContractAbi } from '@partisiablockchain/abi-client';
import React, { PropsWithChildren, useState } from 'react';

type FlipCoinContextType = {
  abi: ContractAbi;
};

const FlipCoinContext = React.createContext<FlipCoinContextType>(
  null as any,
);

export const useFlipCoinAbi = (): ContractAbi =>
  React.useContext(FlipCoinContext)!.abi;

export const FlipCoinProvider: React.FC<
  PropsWithChildren<{ abiBuffer: string }>
> = ({ abiBuffer, children }) => {
  const [abi] = useState(() => {
    return new AbiParser(Buffer.from(abiBuffer, 'base64')).parseAbi().contract;
  });

  return (
    <FlipCoinContext.Provider value={{ abi }}>
      {children}
    </FlipCoinContext.Provider>
  );
};
