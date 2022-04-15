import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {Darkmodecontextprovider} from './contextdarkmode/darkmodecontext'
ReactDOM.render(

  <BrowserRouter>
    <Darkmodecontextprovider>
       <App />
    </Darkmodecontextprovider>
  </BrowserRouter>,
  document.getElementById('root')
);

