import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from "react-router-dom";

// import ProductFullInfo from './FullProductDescription'

// ReactDOM.render(
//   <>
//   <ProductFullInfo/>
//   <div className='wrapper active'>
//   <Wrapper/>
//   </div>
//   </>,
//   document.getElementById("wrapper")
// )

ReactDOM.render(
  <Router>
    <App></App>
  </Router>,
  document.getElementById("main-wrapper")
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
