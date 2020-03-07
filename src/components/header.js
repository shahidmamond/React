import React from 'react';

class Header extends React.Component{
  render(){
    return (
      <ul>
      <li className="active"><a href="#home">Home</a></li>
      <li><a href="#news">Students</a></li>
      <li><a href="#contact">Departments</a></li>
      <li><a href="#about">Faculty</a></li>
  </ul>
  )
  }
}
export default Header;


