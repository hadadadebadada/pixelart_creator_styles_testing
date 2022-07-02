import logo from './logo.svg';
import './App.css';
import NumDice from './components/NumDice'
import IncreaseDiceButton from './components/IncreaseDiceButton'
import React, { Component, useState } from "react";
import PixelartGrid from './components/PixelartGrid';
import PixelartFuncCompo from './components/PixelartFuncCompo'
import Animations from './components/Animations';
import Navbar2 from './components/navbar/Navbar2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


class App extends React.Component {
 
 
  constructor (props) {
    super(props);
    this.state = { mystate: 1 }; 
  }



  incrementState = () => {
    var myNewState = this.state.mystate +1;
    this.setState({mystate: myNewState});
  };

  decrementState = () => {
    var myNewState = this.state.mystate -1;
    if(myNewState > 0){
      this.setState({mystate: myNewState});
    }
  }

  render() {
    return (
      <>
{/*       <NumDice mystate={this.state.mystate} />
      <IncreaseDiceButton incrementState={this.incrementState} /> */}
 

 <Router>

<Navbar2 />

<Routes>

{/*   <Route exact path="/" render={() => (
    <Redirect to="/home" />
  )} /> */}

  <Route exact path='/services' />

  <Route exact path='/employeelist' ></Route>

  <Route exact path='/login'  />
  <Route exact path='/myBookings'  />
  <Route exact path='/home' />
  <Route exact path='/adminbooking' ></Route>

</Routes>

</Router>

 <div class="flex">

 <Animations></Animations>
</div>

<div>
      <PixelartGrid name="huasuhsaauhs1"></PixelartGrid>

</div>



{/*       <PixelartFuncCompo name="huasuhasusah"></PixelartFuncCompo>
 */}     
   
      </>

    )
  }
}

export default App;
