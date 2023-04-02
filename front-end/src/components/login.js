import { useState, useRef } from 'react'
import axios from 'axios'
import Error from './error.js'

const Login ({ setAuth }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        console.log(username)
        console.log(password)
        // ADD URL FROM DJOSER
        axios.post('', {
            // CHANGE- HARD CODING IT FOR NOW
            username: username,
            password: password
        }).then(res => {
            sethAuth(res.data.auth_token, username)
        })
    }

    return (
        <>
            <div>
                <h1>Log In</h1>
                <form onFocus={() => setError(null)} onSubmit={handleSubmit}>
                    <label> <span>username</span></label>
                    <input
                        type='text'
                        name='username'
                        id='username'
                        value={username}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    >
                    </input>
            </div>
            <div>
                <label><span>password</span></label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                >
                </input>
            </div>
            <div>
                <button type='submit'>Submit!</button>
            </div>
        </form>
        { error && <Error message={error.message} /> }
        </>
    )
}


export default Login