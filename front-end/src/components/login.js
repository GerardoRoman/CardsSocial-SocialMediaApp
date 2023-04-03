import { useState } from 'react'
import axios from 'axios'
import Error from './error.js'

const Login = ({ setAuth }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [key, setKey] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        console.log(username)
        console.log(password)
        // ADD URL FROM DJOSER
        axios.post('https://social-cards-app.onrender.com/token/login/', {
            // CHANGE- HARD CODING IT FOR NOW
            username: username,
            password: password
        }).then(res => {
            const token = res.data.auth_token;
            axios.get(`https://social-cards-app.onrender.com/auth/token/login/`,
                {
                    headers: { Authorization: `Token ${token}` }
                }
            ).then((res) => {
                setKey(username, token);
                console.log(res.data);
                // navigate("/profile");
            })
            // .catch((e) => {
        })
    };


    return (
        <>
            <h1>Log In</h1>
            <form onFocus={() => setError(null)} onSubmit={handleSubmit}>
                <div>
                    <label> <span>username</span></label>
                    <input
                        type='text'
                        name='username'
                        id='username'
                        value={username}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    
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
                    />
                    
                </div>
                <div>
                    <button type='submit'>Submit!</button>
                </div>
            </form>
            {error && <Error message={error.message} />}
        </>
    )
}


export default Login