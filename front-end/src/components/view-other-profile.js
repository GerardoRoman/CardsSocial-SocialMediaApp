import Avatar from './profile-icon.js';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'
import FollowUnfollowButton from './followUnfollowButton.js'
import Button from 'react-bootstrap/Button'
// import { Followers } from './followers.js';

export default function ViewOtherProfile({ username, token }) {
    const [cardList, setCardList] = useState(0)
    const [cardNumber, setCardNumber] = useState(1)
    const { currentProfile } = useParams()

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

        axios.get(`https://social-cards-app.onrender.com/users/${currentProfile}`)
    }, [])

    console.log(currentProfile)
    console.log(cardList)
    console.log(cardNumber)

    const TitleBox = styled.p`
    background-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
    overflow: auto;
    outline: none;
    // border: 1px solid black;
    width: 100%;
    height: 3rem;
    font-family: ${props => props.font};
    font-size: 30px;
    resize: none;
    text-align: center;
    // border-bottom: 2px solid black
    margin-top: 30%;
    `

    const BackgroundColor = styled.section`
        background: ${props => props.background};
        width: 100%;
        height: 100%;
        `
    const BorderChoice = styled.section`
        border: 5px ${props => props.border} black;  
        width: 100%;
        height: 100%;
    `

    const FontChoice = styled.section`
        font-family: ${props => props.font};
`

    return (cardList.length) > 0 && (
        <>
            <Avatar />
            <h1>{currentProfile}</h1>
            <FollowUnfollowButton username={username} token={token} />
            <h4> CARDS </h4>
            <div className='followandunfollow'>
                {/* <div><Button variant='outline-dark'>Follow</Button></div>
                <div><Button variant='outline-dark'>Unfollow</Button></div> */}
            </div>

            {cardList.filter(creator => creator.created_by === currentProfile).map((card => (
                <>
                    <div className='card-container'>
                        <div className='card'>
                            <h4>COVER</h4>
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
                            <Button variant='outline-dark'><a href={`/cardview/${card.id}`}>Open Card</a></Button>
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