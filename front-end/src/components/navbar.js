import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import "../styles/navbar.css"

function Navbar() {
    const [expanded, setExpanded] = useState(false)

    return ( 
        <header className='header'>
            <h3>Testing</h3>
            <nav>
                <a href="/home">Home</a>
                <a href="/my_profile">My Profile</a>
                <a href="/new_card">Make a new card</a>
                <a href="/logout">Logout</a>
                <div className='hamburger'>
                {expanded && <a href="home">Home</a>}
                {expanded && <a href="/my_profile">My Profile</a>}
                {expanded && <a href="/new_card">Make a new card</a>}
                {expanded && <a href="/logout">Logout</a>}
                    <button className='nav-button' onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
                        <FaBars />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;