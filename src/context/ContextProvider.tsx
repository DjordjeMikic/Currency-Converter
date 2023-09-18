import React, { createContext } from 'react';

import Ldn from '../components/ldn';
import { useExchange } from '../hooks/useExchange';

export const MainContext = createContext<any>(null);

export const ContextProvider = ({ children }) => {
  const { info, date, base, ldn } = useExchange();

  return (
    <MainContext.Provider value={[info, base, date, ldn]}>
      {ldn ? <Ldn /> : children}
    </MainContext.Provider>
  )
}
