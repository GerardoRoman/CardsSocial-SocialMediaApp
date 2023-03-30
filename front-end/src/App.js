import React from 'react'
import Navbar from './components/navbar.js'
import './App.css';
import Cards from './cards.js'
import CardList from './cardList.js'

function App() {
  return (
    <>
      <Navbar />
      <Cards />
      <CardList />
    </>
  )
}

export default App;