import axios from "axios"
import { useState, useEffect } from "react"
import ErrorPage from "./404.js"
import { useNavigate } from 'react-router-dom'


const Registration = ({ setAuth }) => {
    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();


    const handleRegister = (event) => {
        console.log('AXIOS')
        axios.post('https://social-cards-app.onrender.com/auth/users/', {
            username: userName,
            password: passWord
        }).then(() => {
            console.log('2ndAXIOS')
            axios.post('https://social-cards-app.onrender.com/auth/token/login/',
                {
                    username: userName,
                    password: passWord,

                }).then(res => {
                    const token = res.data.auth_token;
                    setAuth(token, userName);
                    console.log(res.data);
                    console.log('2ndAXIOS')
                    navigate("/");
                });
        })
    }


    return (
        <>
            <h1>Sign Up</h1>
            <div className='login-form'>
                <form onFocus={() => setError(null)} onSubmit={handleRegister}>
                    <div>
                        <label><span>username: </span></label>
                        <input
                            type='text'
                            name='username'
                            id='username'
                            value={userName}
                            required
                            onChange={(e) => setUserName(e.target.value)}
                        >
                        </input>
                    </div>
                    <div>
                        <label><span>password: </span></label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            value={passWord}
                            required
                            onChange={(e) => setPassWord(e.target.value)}
                        >
                        </input>
                    </div>
                    <div>
                        <button type='submit'>Submit!</button>
                    </div>
                </form>
            </div>
            {error && <ErrorPage />}
        </>
    )
};

export default Registration