import React, { useState, useContext, createContext } from 'react';
// import Ldn from './ldn';

const api = '/latest';

export const MainContext = createContext(null);

export const ContextProvider = ({ children }) => {
  let [info, setInfo] = useState(null);
  let [base, setBase] = useState(null);
  let [date, setDate] = useState(null);
  let [ldn, setLdn] = useState(!true);

  React.useEffect(() => {
    const getData = async () => {
      setLdn(true);
      try {
        let res = await fetch(api);
        let data = await res.json();
        setInfo(data.rates);
        setBase(data.base);
        setDate(data.date);
        console.log(data);
        setLdn(!true);
      } catch(e) {
        setLdn(!true);
        // throw new Error(`Error caused cause of ${e}`);
      }
    }

    getData();
  }, []);

  return (
    <MainContext.Provider value={[info, base, date, ldn]}>
      {children}
    </MainContext.Provider>
  )
}
