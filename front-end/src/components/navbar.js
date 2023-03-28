import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react'

function Navbar() {
    return ( 
        <header>
            <h3>Testing</h3>
            <nav>
                <a href="/#">Home</a>
                <a href="/#">My Profile</a>
                <a href="/#">Logout</a>
                <button>
                    <FaTimes />
                </button>
            </nav>
            <buttons>
                <FaBars />
            </buttons>
        </header>
    )
}

export default Navbar;