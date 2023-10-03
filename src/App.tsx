import React, { lazy, Suspense, useState } from 'react';

import { ContextProvider } from './context/ContextProvider';
import Layout from './components/layout/Layout';
import { Loading } from './components/Loading/Loading';

const Main = lazy(() => import('./components/main/Main'));

const App = () => {
  const [theme, setTheme] = useState(false);

  return (
    <ContextProvider>
      <Layout theme={theme} setTheme={setTheme}>
        <Suspense fallback={<Loading />}>
          <Main night={theme} />
        </Suspense>
      </Layout>
    </ContextProvider>
  )
}

export default App;
