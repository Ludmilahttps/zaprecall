import styled from "styled-components";
import { useState } from "react";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Section from "./components/Section"

function App() {
  return (
    <div className="screen-container">
      <Header/>
      <Section/>
      <Footer/>
    </div>
  );
}

export default App;
