import { useState } from 'react';
import { CgProfile } from 'react-icons/cg'
import "../styles/navbar.css"

export default function Profile(username, token) {
    const [expanded, setExpanded] = useState(false)

    return (
        <>
        <button className='hamburger' onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
            <CgProfile />
        </button>
            <div> username </div>
            <div> follow/unfollow button </div>
            <div> CARDS </div>
        </>
    )
}
