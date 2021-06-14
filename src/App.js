import React from 'react';
import { ContextProvider } from './context';
import Layout from './components/layout';
import Main from './components/main';
import "./App.css";
import Ldn from './components/ldn';

const App = () => {
  return (
    <ContextProvider>
      <Layout>
        {/*<Ldn />*/}

        <Main />
      </Layout>
    </ContextProvider>
  )
}

export default App;
