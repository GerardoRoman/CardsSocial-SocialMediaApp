import './App.css';
import React from 'react'
import NewCard from './new-card.js'
import Cards from './components/cards.js'
import CardList from './components/cardList.js'
import Profile from './components/profile.js'
import Navbar from './components/navbar'
import useLocalStorageState from 'use-local-storage-state'
import { Route, Routes } from 'react-router-dom'



function App() {
  const [token, setToken] = useLocalStorageState('loginToken', '')
  const [username, setUsername] = useLocalStorageState('userUsername', '')

  const setAuth = (token, username) => {
    setToken(token)
    setUsername(username)
  }


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element= {<CardList />} />
        <Route path='/new' element= {<NewCard />} />
        <Route path='/profile' element= {<Profile />} />
        <Route path='/cardview/:cardNumber' element= {<Cards />} />
        {/* <Route path='/login' element= {<LogIn />} />
        <Route path='/logout' element= {<LogOut />} /> */}
      </Routes>
      {/* <Cards />
      <CardList />
      <Profile />  */}
    </>
  );
}

export default App;
