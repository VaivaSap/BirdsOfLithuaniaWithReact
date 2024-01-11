import React from "react";

function NavigationButton(props) {
    return (
      <button className='navigation-button' onClick={props.onClick}>{props.text}</button>
    )
  }
  
  export default NavigationButton