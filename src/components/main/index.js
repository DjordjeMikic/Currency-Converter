import { useState, useEffect, useContext, useCallback } from 'react';
import { MainContext } from '../../context';
import { Input, Select } from '../common';
import "./style.css";

const Main = () => {
  let [selectedCurrency, setSelectedCurrency] = useState("EUR");
  let [amount, setAmount] = useState('1');
  let [convertTo, setConvertTo] = useState("RSD");
  let [final, setFinal] = useState(0);
  let [err, setErr] = useState(null);
  let [info] = useContext(MainContext);

  const changeCurrency = (a) => {
    setSelectedCurrency(a.target.value);
  }

  const convertCurrency = (a) => {
    setConvertTo(a.target.value);
  }

  const onChange = (a) => {
    if(isNaN(parseFloat(a.target.value))) {
      setErr('Please enter a valid amount');
      setAmount(a.target.value);
      return;
    } else {
      if(err) {
        setErr(null);
      }
      setAmount(parseFloat(a.target.value));
    }
  }

  const converted = useCallback(() => {
    if(!info || !Object.keys(info).length) return;
    let sum = (1 / info[selectedCurrency]) / (1 / info[convertTo]);
    setFinal(sum * amount);
  }, [selectedCurrency, convertTo, amount, info]);

  useEffect(() => {
    converted();
  }, [converted, info]);

  const changeValues = () => {
    let middle = selectedCurrency;
    setSelectedCurrency(convertTo);
    setConvertTo(middle);
  }

  return (
    <div className="flex main-container">

      <div className="flex column main">
        <div className="flex from from__column">
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
        </div>

        <div className="flex from">
          <Select
            state={info && Object.keys(info)}
            base={convertTo}
            onChange={convertCurrency}
          />
          {info && Object.keys(info).length && (
            <div className="flex" style={{ alignItems: 'flex-end' }}>
              <h1 title={final}>{final.toFixed(2)}</h1>
              <p>{convertTo}</p>
            </div>
          )}
        </div>

      </div>
      <button className="btn" onClick={changeValues}>
        <p>&larr;</p>
        <p>&rarr;</p>
      </button>
    </div>
  )
}

export default Main;
