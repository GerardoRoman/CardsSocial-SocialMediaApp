// import { useState } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// function FollowUnfollowButton({ token }) {
//     const [userName, setUserName] = useState('')
//     const [follow, setFollow] = useState('')
//     const [unfollow, setUnfollow] = useState('')

//     const handleFollow = (event) => {
//         event.preventDefault()
//         axios.post('https://social-cards-app.onrender.com/follow/username/', {
//             headers: {
//                 Authorization: `Token ${token}`
//             }
//         }).then(res => {
//             setFollow(res.data.results);
//             console.log(res.data.results);
//         })
//     };

//     const handleUnfollow = (event) => {
//         event.preventDefault()
//         axios.delete('https://social-cards-app.onrender.com/follow/username/', {
//             headers: {
//                 Authorization: `Token ${token}`
//             }
//         }).then(res => {
//             setUnfollow(res.data.results);
//             console.log(res.data.results);
//         })
//     };


//     return (
//         <>
//             <button onClick={handleFollow}>Follow!</button>
//             <button onClick={handleUnfollow}>Unfollow!</button>
//         </>
//     )
// }

export default FollowUnfollowButton;
