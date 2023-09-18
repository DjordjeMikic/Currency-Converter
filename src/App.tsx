import React, { lazy, Suspense } from 'react';

import { ContextProvider } from './context/ContextProvider';
import Layout from './components/layout';
import Ldn from './components/ldn';
import "./App.css";

const Main = lazy(() => import('./components/main'));

const App = () => (
  <ContextProvider>
    <Layout>
      <Suspense fallback={<Ldn />}>
        <Main />
      </Suspense>
    </Layout>
  </ContextProvider>
)

export default App;
