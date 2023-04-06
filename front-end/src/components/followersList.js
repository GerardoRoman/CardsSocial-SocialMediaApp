import { useEffect, useState } from 'react';
import axios from 'axios'

export function FollowingList({token}) {
    const [following, setFollowing] = useState([]);
    const [count, setCount] = useState('')
// console.log(token)
useEffect(() => {
    axios.get('https://social-cards-app.onrender.com/followship-count/', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
            }
    }).then((response) => {
        setFollowing(response.data)
        setCount(response.data.following_count)
        // console.log(response.data)
    })
}, [])

    return (
        <>
        <h3>Following: {count}</h3>
        </>
    )
}

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
            <h3>Followers: {count}</h3>
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