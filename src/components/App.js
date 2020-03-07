import React from 'react';
import Header from './header';
import Footer from './footer';
import Home from './Home';

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      myName:'Shahid mamond'
    }
  }
  render(){
    return (
      <div>
        <Header/>
          <h1>{this.state.myName}</h1>
          <Home/>
        <Footer/>
      </div>
    )
  }
}
export default App;
