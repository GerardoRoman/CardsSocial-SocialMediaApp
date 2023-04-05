import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {
    const navigate = useNavigate()


    function handleClick() {
        console.log('clikced')
        navigate('/')
    }

    return (
        <>
        <h1>404 Page not found!</h1>
        <div className='return-home'><button onClick={handleClick}>Return Home</button></div>
        </>
    )
}