import React, { lazy, Suspense } from 'react';

import { ContextProvider } from './context/ContextProvider';
import Layout from './components/layout/Layout';
import { Loading } from './components/Loading/Loading';
import "./App.css";

const Main = lazy(() => import('./components/main'));

const App = () => (
  <ContextProvider>
    <Layout>
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    </Layout>
  </ContextProvider>
)

export default App;
