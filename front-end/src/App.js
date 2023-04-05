import './App.css';
import React from 'react'
import NewCard from './components/new-card.js'
import Cards from './components/cards.js'
import CardList from './components/cardList.js'
import Profile from './components/profile.js'
import Navbar from './components/navbar.js'
import Login from './components/login.js'
import Registration from './components/newuser.js'
import useLocalStorageState from 'use-local-storage-state'
import { Route, Routes } from 'react-router-dom'
import ViewOtherProfile from './components/view-other-profile';
import ErrorPage from './components/404';



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
        <>
        <Navbar/>
        <Routes>
          
          <Route path='/Profile' element={<Profile username={username} token={token} />} />
          <Route path='/' element={<CardList />} />
          <Route path='/profile' element={<Profile username={username} token={token} />} />
          <Route path='/new' element={<NewCard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/cardview/:cardNumber' element= {<Cards />} />
          <Route path='/viewotherprofile/:currentProfile' element= {<ViewOtherProfile />} />
          <Route path='/404page' element={<ErrorPage/>} />
        </Routes>
        </>
      ) : (
        <div>
          <Routes>
            <Route path='/' element={loggedIn ? <CardList /> : <Login setAuth={setAuth} />} />
          </Routes>
        </div>)
      }</>
  );
}

export default App;
