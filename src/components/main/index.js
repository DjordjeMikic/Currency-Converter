import React from 'react';
import { MainContext } from '../../context';
import { Input, Select } from '../common';
import CurrencyFormat from '../../helpers/currencyFormat';
import "./style.css";

const Main = () => {
  let [selectedCurrency, setSelectedCurrency] = React.useState("EUR");
  let [amount, setAmount] = React.useState('1');
  let [convertTo, setConvertTo] = React.useState("RSD");
  let [final, setFinal] = React.useState(0);
  let [err, setErr] = React.useState(null);
  let [info, base] = React.useContext(MainContext);

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
  const converted = React.useCallback(() => {
    if(!info || !Object.keys(info).length) return;
    let sum = (1 / info[selectedCurrency]) / (1 / info[convertTo]);
    setFinal(sum * amount);
    // console.log(sum);
  }, [selectedCurrency, convertTo, amount, info]);

  React.useEffect(() => {
    converted();
  }, [converted, info]);

  return (
    <div className="flex main-container">
      <div className="flex column main">
        <div className="flex from">
          <Select
            state={info && Object.keys(info)}
            base="EUR"
            onChange={changeCurrency}
          />
          <Input id="from" info="From:" e={err} onChange={onChange} value={amount} />
        </div>
        <div className="flex from">
          <Select
            state={info && Object.keys(info)}
            base="RSD"
            onChange={convertCurrency}
          />
          {info && Object.keys(info).length && (
            <div className="flex" style={{ alignItems: 'flex-end' }}>
              <h1>{final.toFixed(2)}</h1>
              <p>{convertTo}</p>
            </div>
          )}
        </div>
      </div>
      <button className="btn">Change</button>
    </div>
  )
}

export default Main;
