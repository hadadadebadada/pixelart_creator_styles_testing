import React, { Component, useState } from "react";


const NumDice = (props) => {
return (
    <h2>
    {props.mystate}
  </h2>
)
}
export default NumDice;
/* 
class NumDice extends React.Component { 

    render() {
      return (
        <h2>
          {props.mystate}
        </h2>
      );  
    }
  };

export default NumDice; */