import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import '../src/Assets/Styles/index.scss';
import { Provider } from 'react-redux';
import Spinner from './Components/Spinner';
import { Layout } from './Context/Layout';
import { store } from './Redux/Store/Store';

const App = lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <Layout>
          <App />
        </Layout>
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

