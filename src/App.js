import styled from "styled-components";
import React from 'react'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Section from "./components/Section"

function App() {
  const [aux, setAux] = React.useState(0)
  const[icon, setIcon] = React.useState('teste')

  return (
    <div className="screen-container">
      <Header/>
      <Section 
        aux={aux} 
        setAux={setAux} 
        icon={icon} 
        setIcon={setIcon}
      />
      <Footer 
        aux={aux} 
        setAux={setAux} 
        icon={icon} 
        setIcon={setIcon}
      />
    </div>
  );
}

export default App;
