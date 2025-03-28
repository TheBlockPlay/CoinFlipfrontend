'use client';

import React,{ PropsWithChildren , useContext, createContext} from 'react';
import { WalletIdentity } from '../../wallet/wallet-identity';

type IdentityContextType = {
  identity: WalletIdentity | null;
};

const IdentityContext = createContext<IdentityContextType>({
  identity: null,
});

export const useIdentity = () => useContext(IdentityContext).identity;

export const IdentityProvider: React.FC<PropsWithChildren<IdentityContextType>> = ({ children, identity }) => {
  return (
    <IdentityContext.Provider value={{ identity }}>
      {children}
    </IdentityContext.Provider>
  );
};
