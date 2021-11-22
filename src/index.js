//IMPORT 
import {useRoutes} from "hookrouter";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

//IMPORT PAGES
import App from './App';
import About from'./pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact'

//MONITORING
import reportWebVitals from './reportWebVitals';

const routes = {
  "/": () => <App />,
  "/about": () => <About />,
  "/projects": () => <Projects />,
  "/resume": () => <Resume />,
  "/contact": () => <Contact />
}

function Main(){
  return(
    <div>
      {useRoutes(routes)}
    </div>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();