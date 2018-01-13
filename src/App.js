import React, { Component } from 'react';
import './App.css';



class App extends Component {

    state=({
      valeur:0,
      table:["Argentine","France","Espagne","Etat-unis"]
    });
  

    action=(event)=>{
      
    //console.log(event.target.value);
    this.setState({
      valeur:event.target.value
    });
    }

  render() {
      
    let images=this.state.table.map((element,el)=>{
      return(<option key={el} value={el}>{element}</option>);
    });

    let tablePicture=["ar","fr","es","us"];



    return (

      <div className="box">
      
         <select value={this.valeur} onClick={this.action.bind(this)}>
          {images}
         </select>
        <img src={require("./images/"+(tablePicture[this.state.valeur])+".png")} className="pic" alt="drapeau"/>
        <p>Drapeaux: {this.state.table[this.state.valeur]}</p>
        
      </div>
    );

  }
  

}

export default App;
