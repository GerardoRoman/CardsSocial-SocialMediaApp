import './App.css';
import React from 'react'
import NewCard from './new-card.js'
import Cards from './components/cards.js'
import CardList from './components/cardList.js'
import Profile from './components/profile.js'
import Navbar from './components/navbar.js'
import Login from './components/login.js'
import Registration from './components/newuser.js'
import useLocalStorageState from 'use-local-storage-state'
import { Route, Routes } from 'react-router-dom'



function App() {
  const [token, setToken] = useLocalStorageState('loginToken', '')
  const [username, setUsername] = useLocalStorageState('userUsername', '')

  const setAuth = (token, username) => {
    setToken(token)
    setUsername(username)
  }

  const loggedIn = token

  return (
    <>

      {loggedIn ? (
        <Routes>
          <Route path='/Profile' element={<Profile username={username} token={token} />} />
          {/* <Registration /> */}
          {/* <CardList /> */}
          {/* <Navbar /> */}
          {/* <Cards /> */}
          {/* <NewCard /> */}
        </Routes>
      ) : (
        <div>
          <Routes>
            <Route path='/Login' element={<Login setAuth={setAuth} />} />
          </Routes>
        </div>)
      }</>
  );
}

export default App;
