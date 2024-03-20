import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import 'D:/ReactJS/company_work/src/design.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Deisgn from './PracticeDeign/design';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Deisgn/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
