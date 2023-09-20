import React, { useState, useEffect, useContext, useCallback } from 'react';
import { MainContext } from '../../context/ContextProvider';
import { Input, Select } from '../common/Inputs';
import "./style.css";
import { Converted, InputContainer, MainContainer, MainContent } from './Main.style';
import { CircleButton } from '../common/CircleButton';

interface MainProps {
  night: boolean;
}

const Main: React.FC<MainProps> = ({ night }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertTo, setConvertTo] = useState("RSD");
  const [final, setFinal] = useState(0);
  const [err, setErr] = useState<string | null>(null);
  const [info] = useContext(MainContext);

  const changeCurrency = (e) => setSelectedCurrency(e.target.value);

  const convertCurrency = (e) => setConvertTo(e.target.value);

  const onChange = (a) => {
    if (isNaN(parseFloat(a.target.value))) {
      setErr('Please enter a valid amount');
      setAmount(a.target.value);
      return;
    }

    if (err) setErr(null);

    setAmount(parseFloat(a.target.value));
  }

  const converted = useCallback(
    () => {
      if (!info || !Object.keys(info).length) return;
      const sum = (1 / info[selectedCurrency]) / (1 / info[convertTo]);
      setFinal(sum * amount);
    }, [
    selectedCurrency,
    convertTo,
    amount,
    info
  ]
  );

  useEffect(() => {
    converted();
  }, [converted, info]);

  const changeValues = () => {
    const middle = selectedCurrency;
    setSelectedCurrency(convertTo);
    setConvertTo(middle);
  }

  return (
    <MainContainer column={false} night={night}>

      <MainContent column>
        <InputContainer column={false} rowMobile>
          <Select
            state={info && Object.keys(info)}
            base={selectedCurrency}
            onChange={changeCurrency}
          />
          <Input
            id="from"
            info="From:"
            e={err}
            onChange={onChange}
            value={amount}
          />
        </InputContainer>

        <InputContainer column={false} rowMobile={false}>
          <Select
            state={info && Object.keys(info)}
            base={convertTo}
            onChange={convertCurrency}
          />
          {info && Object.keys(info).length && (
            <Converted column={false}>
              <h1 title={final.toString()}>
                {isNaN(final) ? 'Wrong value' :
                  parseFloat(final.toFixed(2)).toLocaleString()}
              </h1>
              <p>{convertTo}</p>
            </Converted>
          )}
        </InputContainer>

      </MainContent>

      <CircleButton changeValues={changeValues} />

    </MainContainer>
  )
}

export default Main;
