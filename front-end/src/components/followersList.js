import { useEffect, useState } from 'react';
import axios from 'axios'

export function FollowingList(token) {
    const [following, setFollowing] = useState([]);
    const [count, setCount] = useState(0)
console.log(token.token)
useEffect(() => {
    axios.get('https://social-cards-app.onrender.com/users/following', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${token.token}`
            }
    }).then((response) => {
        setFollowing(response.data.results)
        setCount(response.data.count)
        console.log(response.data.results)
    })
}, [])

    return (
        <>
        <h3>Following: {count}</h3>
        <ul>
            {
                following && following.map((user) => (
            <li>
                <button>{user.username}</button>
            </li>
                ))
}
        </ul>
        </>
    )
}
// export function FollowersList(token) {
//     const [followers, setFollowers] = useState([]);
//     const [count, setCount] = useState(0)
// console.log(token.token)
// useEffect(() => {
//     axios.get('https://social-cards-app.onrender.com/users/following', {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `token ${token.token}`
//             }
//     }).then((response) => {
//         setFollowers(response.data.results)
//         setCount(response.data.count)
//         // console.log(response.data.results)
//     })
// }, [])

//     return (
//         <>
//             <h3>Followers: {count}</h3>
//         <ul>
//             {
//                 followers && followers.map((follower) => (
//             <li>
//                 <button>{follower.username}</button>
//             </li>
//                 ))
// }
//         </ul>
//         </>
//     )
// }


