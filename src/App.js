//import logo from './logo.svg';
import './App.css';
import React from 'react';
import './style.css'
//import{Header , Content , Footer} from './func-components';
//import Calendar from './class-components';
//import { Button } from './class-components';
//import { Calculator2 } from './calculator';
//import { EventData2 } from './even-data';
//import RefsFunc from './refs-func';
//import RefsArray from './refs-array';
//import MessageBox from './state-func';
import Content from './context-content';
import { userContext } from './context';

function App() {
  return(
    <>
      <userContext.Provider value = {'Palm'}>
        <Content />
      </userContext.Provider>
    </>
  );
}

export default App;
