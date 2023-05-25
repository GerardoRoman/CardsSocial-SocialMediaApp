import Avatar from './profile-icon.js'
import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { FollowUnfollowButton } from './followUnfollowButton.js'
import { FollowingList, FollowersList } from './followersList.js'
import  { Button }  from 'react-bootstrap'
import { Followers } from './followers.js'


export default function Profile({ username, token }) {
    const [cardList, setCardList] = useState(0)
    const [cardNumber, setCardNumber] = useState(1)

    console.log(username.username)

    useEffect(() => {
        axios.get('https://social-cards-app.onrender.com/cards/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        }).then((response) => {
            console.log(response.data.results)
            setCardList(response.data.results.reverse())
        })

        setCardNumber(cardList.id)
    }, [])


    console.log(cardList)
    console.log(cardNumber)


    function deleteCard(cardID) {
        console.log(cardID)
        axios.delete(`https://social-cards-app.onrender.com/users/my-cards/${cardID}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
            .then(() => setCardList((cardList) => cardList.filter((card) => card.id !== cardID)))
    }


    return (cardList.length) > 0 && (
        <>
            <Avatar />
            <h1>{username}</h1>
            <div className='followandunfollow'>
            <FollowingList username={username} token={token} />
            <FollowersList username={username} token={token} />
            <Followers username={username} token={token}/>
            </div>
            <h4> CARDS </h4>
            {cardList.filter(creator => creator.created_by === username).map((card => (
                <>
                    <div className='card-container'>
                        <div className='card'>

                            <BackgroundColor background={card.color}>
                                <BorderChoice border={card.border}>
                                    <FontChoice font={card.font}>
                                        <div>
                                            <div className='card-back'>
                                                <TitleBox placeholder='Title' id='title' name='title'>{card.title_text}</TitleBox>
                                            </div>
                                        </div>
                                    </FontChoice>
                                </BorderChoice>
                            </BackgroundColor>
                        </div>
                    </div>
                    <br />
                    <p className='created-by'>
                        Created By: {card.created_by}
                        <div className='navigate-cards'>
                            <Button variant="outline-dark"><a href={`/cardview/${card.id}`}>Open Card</a></Button>
                            <Button variant="outline-dark" onClick={() => deleteCard(card.id)}>Delete</Button>
                            <Button variant="outline-dark"><a href={`/edit/${card.id}`}>Edit</a></Button>
                        </div>
                    </p>
                    <br />
                    <br />
                    <br />
                </>
            )))}
        </>
    )
}

// ternary that set followers to follow/ unfollow based on if 
// the profile being viewed is the users or not