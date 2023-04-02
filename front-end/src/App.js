import './App.css';
import React from 'react'
import NewCard from './new-card.js'
import Cards from './cards.js'
import CardList from './cardList.js'
import Profile from './profile.js'
import Navbar from './components/navbar';


function App() {

  return (
    <>
      <Navbar />
      <NewCard />
      {/* <Cards />
      <CardList />
      <Profile />  */}
    </>
  );
}

export default App;
