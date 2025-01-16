//import logo from './logo.svg';
import './App.css';
import React from 'react';
import './style.css'
import{Header , Content , Footer} from './func-components';
import Calendar from './class-components';
import { Button } from './class-components';
import { Calculator2 } from './calculator';
import { EventData2 } from './even-data';

function App() {
  return(
    <>
      <Header/>
      <p><center><Calendar/></center></p>
      <Content/>
      <Footer/>
      <Button/>
      <Calculator2/>
      <EventData2/>
    </>
  );
}

export default App;
