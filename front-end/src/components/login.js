import { useState } from 'react'
import axios from 'axios'
import Error from './error.js'
import { useNavigate } from 'react-router-dom'
import ErrorPage from './404.js'

const Login = ({ setAuth }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();
    // const [login, setLogin] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        console.log(username)
        console.log(password)
        axios.post('https://social-cards-app.onrender.com/auth/token/login/', {
            username: username,
            password: password,
        }).then(res => {
            const token = res.data.auth_token;
            setAuth(token, username);
            console.log(res.data);
            navigate("/");
        })
    };


    return (
        <>
            <h1 >Log In</h1>
            <div className='login-form'>
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
                    <div className="signUpPrompt" type='submit'>
                        <p>Not a member yet?</p>
                        <a className="signUpLink" href="/auth/users/">Sign Up!</a>
                    </div>
                </form>
            </div>
            {error && <ErrorPage />}
        </>
    )
}


export default Login