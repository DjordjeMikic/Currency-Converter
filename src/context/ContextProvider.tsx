import React, { createContext } from 'react';

import { Loading } from '../components/Loading/Loading';
import { useExchange } from '../hooks/useExchange';

export const MainContext = createContext<any>(null);

export const ContextProvider = ({ children }) => {
  const { info, date, base, ldn } = useExchange();

  return (
    <MainContext.Provider value={[info, base, date, ldn]}>
      {ldn ? <Loading /> : children}
    </MainContext.Provider>
  )
}
