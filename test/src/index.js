import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import TestsStore from './store/testsStore';
import AppRouter from './AppRouter';

export const TestsContext = createContext(null)


ReactDOM.render(
  <TestsContext.Provider value = {{
    tests: new TestsStore(),
  }}>
    <React.StrictMode>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </React.StrictMode>
  </TestsContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
