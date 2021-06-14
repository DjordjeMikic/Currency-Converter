import React from 'react';
import { ContextProvider, MainContext } from './context';
import Layout from './components/layout';
import Main from './components/main';
import "./App.css";

const App = () => {
  return (
    <ContextProvider>
      <Layout>
        <h1>Currency Converter</h1>
        <Main />
      </Layout>
    </ContextProvider>
  )
}

export default App;
