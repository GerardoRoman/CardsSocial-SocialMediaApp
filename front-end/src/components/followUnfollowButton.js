import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import  { Button }  from 'react-bootstrap'



function FollowUnfollowButton({ username, token }) {
    const [follow, setFollow] = useState()
    const { currentProfile } = useParams()
    const [following, setFollowing] = useState()

    
    useEffect(() =>
        { axios.get('https://social-cards-app.onrender.com/following',
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        }).then(res => {
            console.log(res.data)
            setFollowing(res.data.results.map(result => result.username))
        })
    }, []); 

    console.log(following)


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
    // console.log(isFollowing)
    // console.log(follow)
    // console.log(setFollow)
    // console.log(currentProfile)

    return (
        <>
        <div className='followandunfollow'>
            {follow ? <Button variant='outline-dark' onClick={handleUnfollow}>Unfollow!</Button> : <Button variant='outline-dark' onClick={handleFollow}>Follow!</Button>}
        </div>

        </>
    )
}

export default FollowUnfollowButton;
