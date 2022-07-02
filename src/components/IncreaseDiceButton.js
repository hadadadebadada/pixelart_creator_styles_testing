import React, { Component, useState } from "react";


const IncreaseDiceButton = (props) => {
  return <button class="flex items-center px-4 py-3 text-white bg-blue-500 hover:bg-blue-400" onClick={props.incrementState}>
  Increase Number Of Dice
</button>
}

/* class IncreaseDiceButton extends React.Component {
    render () {
      return (
        <button onClick={props.incrementState}>
          Increase Number Of Dice
        </button>
      );
    }
  }; */

  export default IncreaseDiceButton;