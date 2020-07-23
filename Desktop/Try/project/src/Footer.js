import React, { Component } from 'react';
import "./style.css";
import CountGraphic from './CountGraphic.js'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import ReactDOM from 'react-dom';
import "./style.css";
//import Space_Bar_To_Launch from "./FooterComponents/Space_Bar_To_Launch.js"

class Footer extends React.Component{
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this)
    this.state = {clicked: false};
}

handler() {
      this.setState({
          clicked: true
      });
  }


    render(){
      const clicked = this.state.clicked;
      let button;
      if (!clicked) {
      button = <div className="footerContent">Press Space Bar To Launch{document.addEventListener('keyup', event => {
      if (event.code === 'Space') {
      this.handler()}})} </div>
    } else {
      button = <CountGraphic/>
    }
    return(<div>{button}

</div>)
  }
}

export default Footer
