import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Wrapper from './Wrapper'
import reportWebVitals from './reportWebVitals';
// import Header from './Header.js';
// import Main from './Main.js';
// import Footer from './Footer.js';
import ProductFullInfo from './FullProductDescription'
// import hell from '.Translation'
// let ProductFullInfoContainer = document.createElement('div');
// ProductFullInfoContainer.classList.add("product-full-info", "disable");
// document.body.insertBefore(ProductFullInfoContainer, document.getElementsByClassName("wrapper")[0]); //inserting the ProductFullInfoContainer before the wrapepr elem

// import Something from './Translation'
// import {useTranslation } from "react-i18next";
let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
wrapper.classList.add("active");

// const e = React.createElement;
// ReactDOM.render(
//   e('div', {className: "wrapper active"}, 'Hello World'),
//   document.body
// );

// const Index = () => {
//   return(
//     <>
//       <div className="product-full-info disable">
//         <ProductFullInfo></ProductFullInfo>
//       </div>
//       <div className="wrapper active">
//         <Wrapper></Wrapper>
//       </div>
//   </>
//   );
// };


// ReactDOM.render(
//   Index,
//   document.body
// );

// export default Index;

// const HelloWorld = () => {
//   return (
//     <p>CMOOON WORK FOR GOD SAKE</p>
//   );
// };

// ReactDOM.render(
//   HelloWorld,
//   document.body
// );

// export default HelloWorld;


ReactDOM.render(
  <ProductFullInfo/>,
  document.body
);

document.body.appendChild(wrapper)
ReactDOM.render(
  <Wrapper/>,
  wrapper
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
