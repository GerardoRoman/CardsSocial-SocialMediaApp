import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import "../styles/navbar.css"

function Navbar() {
    const [expanded, setExpanded] = useState(false)

    return ( 
        <header className='header'>
            <h3>Social Cards</h3>
            <nav className='navbar'>
                <div className='hamburger'>
                {expanded && <div>
                    <li>
                        <a href="/home">Home</a>
                        </li> 
                        <li><a href="/my_profile">My Profile</a></li> 
                        <li><a href="/new_card">Make a new card</a></li>
                        <li><a href="/logout">Logout</a></li> 
                        </div>}
                    <button className='hamburger' onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
                        <FaBars />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;

