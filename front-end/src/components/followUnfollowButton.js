import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function FollowUnfollowButton({ username, token }) {
    const [follow, setFollow] = useState('')
    const [unfollow, setUnfollow] = useState('')
    const { currentProfile } = useParams()


    const handleFollow = (event) => {
        event.preventDefault()
        axios.post(`https://social-cards-app.onrender.com/follow/${currentProfile}/`, {},
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            }).then(res => {
                setFollow(res.data.results.following);
                console.log(res.data.results.following);
            })
    };

    const handleUnfollow = (event) => {
        event.preventDefault()
        axios.delete(`https://social-cards-app.onrender.com/follow/${currentProfile}/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        }).then(res => {
            setUnfollow(res.data.results.following);
            console.log(res.data.results.following);
        })
    };

    console.log(follow)
    console.log(setFollow)
    console.log(currentProfile)

    return (
        <>
            {follow ? <button onClick={handleUnfollow}>Unfollow!</button> : <button onClick={handleFollow}>Follow!</button>}
            {/* <button onClick={handleUnfollow}>Unfollow!</button>
            <button onClick={handleFollow}>Follow!</button> */}
            {/* <button
                onClick={setFollow ? { handleUnfollow } : handleFollow}
                buttonText={`${setFollow ? "Unfollow" : "Follow"}`} */}
            {/* /> */}

        </>
    )
}

export default FollowUnfollowButton;
