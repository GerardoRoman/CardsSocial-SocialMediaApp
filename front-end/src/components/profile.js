import Avatar from './profile-icon.js'
import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components';
import FollowBtn from './followBtn.js'


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
            setCardList(response.data.results)
        })

        setCardNumber(cardList.id)
    }, [])


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

    function deleteCard(cardID) {
        console.log(cardID)
        axios.delete(`https://social-cards-app.onrender.com/users/my-cards/${cardID}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }})
            .then(() => setCardList((cardList) => cardList.filter((card) => card.id !== cardID)))
    }

    const BackgroundColor = styled.section`
        background: ${props => props.background};
        width: 100%;
        height: 100%;
        `
    const BorderChoice = styled.section`
        border: 5px ${props => props.border} black;  
        width: 97%;
        height: 97%;
    `

    const FontChoice = styled.section`
        font-family: ${props => props.font};
`

    return (cardList.length) > 0 && (
        <>
            <Avatar />
            <h1>{username}</h1>
            <div>Followers</div>
            <FollowBtn />
            <h4> CARDS </h4>
            {cardList.filter(creator => creator.created_by === username).map((card => (
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
                            <button><a href={`/cardview/${card.id}`}>Open Card</a></button>
                            <button onClick={() => deleteCard(card.id)}>Delete</button>
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