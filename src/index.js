//IMPORT 
import {useRoutes} from "hookrouter";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

//IMPORT PAGES
import App from './App';

//MONITORING
import reportWebVitals from './reportWebVitals';

const routes = {
  "/": () => <App />,
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