import React, { Component } from 'react';

class Bouton extends Component{




render() {



    return (

     <button onClick={this.props.fonction}>{this.props.text}</button>

    );

  }
  

}

export default Bouton;
