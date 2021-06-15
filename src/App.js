import { lazy, Suspense } from 'react';
import { ContextProvider } from './context';
import Layout from './components/layout';
import Ldn from './components/ldn';
import "./App.css";

const Main = lazy(() => import('./components/main'));

const App = () => {
  return (
    <ContextProvider>
      <Layout>

        <Suspense fallback={<Ldn />}>
          <Main />
        </Suspense>

      </Layout>
    </ContextProvider>
  )
}

export default App;
