import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './MainPage';
import reportWebVitals from './reportWebVitals';

// Import thư viện Router và store:
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './ReduxModules/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <MainPage />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
