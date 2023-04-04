import axios from "axios"
import { useState, useEffect } from "react"
import Error from './error.js'


const Registration = ({ setAuth }) => {
    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')
    const [error, setError] = useState('')


    const handleRegister = (event) => {
        axios.post('https://social-cards-app.onrender.com/auth/users/', {
            username: userName,
            password: passWord
        }).then(res => {
            setAuth(res.data.auth_token, userName)
        })

        return (
            <>
                <h1>Sign Up</h1>
                <form onFocus={() => setError(null)} onSubmit={handleRegister}>
                    <div>
                        <label> <span>username</span></label>
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
                        <label><span>password</span></label>
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
                {error && <Error message={error.message} />}
            </>
        )

    }
}

export default Registration