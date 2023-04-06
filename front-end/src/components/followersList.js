import { useEffect, useState } from 'react';
import axios from 'axios'

export function FollowersList(token) {
    const [followers, setFollowers] = useState([]);
    const [count, setCount] = useState(0)
console.log(token.token)
useEffect(() => {
    axios.get('https://social-cards-app.onrender.com/users/following', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${token.token}`
            }
    }).then((response) => {
        setFollowers(response.data.results)
        setCount(response.data.count)
        // console.log(response.data.results)
    })
}, [])

    return (
        <>
            <h3 className='followers'>Followers: {count}</h3>
        <ul>
            {
                followers && followers.map((follower) => (
            <li>
                <button>{follower.username}</button>
            </li>
                ))
}
        </ul>
        </>
    )
}

export function FollowingList(token) {
    const [following, setFollowing] = useState([]);
console.log(token.token)
useEffect(() => {
    axios.get('https://social-cards-app.onrender.com/users/following', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${token.token}`
            }
    }).then((response) => {
        setFollowing(response.data.results)
        console.log(response.data.results)
    })
}, [])

    return (
        <>
        <h3 className='following'>Following: {following.count}</h3>
        <ul>
            {
                following && following.map((follower) => (
            <li>
                <button>{follower.username}</button>
            </li>
                ))
}
        </ul>
        </>
    )
}

