import React from 'react'
import { useState } from 'react'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Section from "./components/Section"

export default function App() {
  const [aux, setAux] = useState([]);
  const [done, setDone] = useState(0);
  const [error, setError] = useState(false);

  return (
    <div className="screen-container">
      <Header />
      <Section
        done={done}
        setAux={setAux}
        aux={aux}
        setDone={setDone}
        setError={setError}
      />
      <Footer
        done={done}
        aux={aux}
        error={error}
      />
    </div>
  )
}
