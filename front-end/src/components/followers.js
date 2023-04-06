import { useEffect, useState } from 'react';
import axios from 'axios'
import { Accordion } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';


export function Followers({token}) {
    const [followers, setFollowers] = useState([]);

useEffect(() => {
    axios.get('https://social-cards-app.onrender.com/following', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
            }
    }).then((response) => {
        setFollowers((response.data.results))
        console.log(followers)
    })
}, [])


return (
    <>
    <Accordion className='follower-accordian'>
    <Accordion.Item eventKey="0">
        <Accordion.Header>
    <h5>Followers</h5>
    </Accordion.Header>
    <AccordionBody>
    <ul>{followers.map(username => <li className='followers'><a href={`/viewotherprofile/${username.username}`}>
        {username.username}</a></li>)}
    </ul>
    </AccordionBody>
    </Accordion.Item>
    </Accordion>
    </>
)
}