import axios from 'axios';
import React, { useEffect, useState } from 'react';

const API = 'https://api.exchangerate.host/latest';

interface RateType {
  [x: string]: number;
}

export const useExchange = () => {
  const [info, setInfo] = useState<RateType | null>(null);
  const [base, setBase] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [ldn, setLdn] = useState(false);

  useEffect(() => {
    (async () => {
      setLdn(true);

      try {
        const res = await axios({
          method: 'get',
          url: API
        });
        console.log(res)
        setInfo(res.data.rates);
        setBase(res.data.base);
        setDate(res.data.date);
        setLdn(false);
      } catch(e) {
        setLdn(false);
      }
    })();
  }, []);

  return {
    ldn,
    info,
    base,
    date,
  };
}