import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
// import './App.css';

function App() {
  return (
   <>
   
   <Switch>
     <Route path = "/" exact component = {Home}/>
 
   </Switch>
   </>
  );
}

export default App;
