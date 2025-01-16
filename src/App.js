//import logo from './logo.svg';
import './App.css';
import React from 'react';
import './style.css'
import{Header , Content , Footer} from './func-components';
import Calendar from './class-components';
import { Button } from './class-components';
import { Calculator2 } from './calculator';
import { EventData2 } from './even-data';
import RefsFunc from './refs-func';

function App() {
  return(
    <>
      <Header/>
      <p><center><Calendar/></center></p>
      <Content/>
      <Footer/>
      <p><center>-----------------------------------------</center></p>
      <p><center><Button/></center></p>
      <p><center>-----------------------------------------</center></p>
      <Calculator2/>
      <p><center>-----------------------------------------</center></p>
      <EventData2/>
      <p><center>-----------------------------------------</center></p>
      <RefsFunc/>
    </>
  );
}

export default App;
