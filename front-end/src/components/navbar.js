import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import "../styles/navbar.css"

function Navbar() {
    const [expanded, setExpanded] = useState(false)

    return ( 
        <header className='header'>
            <div>
            <h3>Social Cards</h3>
            </div>
            <nav className='navbar'>
                <div className='hamburger'>
                {expanded && <div>
                        <li><a href="/">Home</a></li> 
                        <li><a href="/profile">My Profile</a></li> 
                        <li><a href="/new">Make a new card</a></li>
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

