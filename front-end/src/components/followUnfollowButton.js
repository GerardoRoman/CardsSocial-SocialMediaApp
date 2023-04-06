import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function FollowUnfollowButton({ username, token }) {
    const [follow, setFollow] = useState(false)
    const { currentProfile } = useParams()


    const handleFollow = (event) => {
        axios.post(`https://social-cards-app.onrender.com/follow/${currentProfile}/`, {},
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            }).then(res => {
                setFollow(res.data.following);
            })
    };

    const handleUnfollow = (event) => {
        axios.delete(`https://social-cards-app.onrender.com/follow/${currentProfile}/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        }).then(res => {
            setFollow(res.data.following);
        })
    };

    console.log(follow)
    console.log(setFollow)
    console.log(currentProfile)

    return (
        <>
            {follow ? <button onClick={handleUnfollow}>Unfollow!</button> : <button onClick={handleFollow}>Follow!</button>}


        </>
    )
}

export default FollowUnfollowButton;
