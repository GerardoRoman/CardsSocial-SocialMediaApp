import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NewCard from './new-card';
import Cards from './cards.js';
import { Navigate } from "react-router-dom";
import  Button  from 'react-bootstrap/Button'




export default function CardList({ token }) {
    const [cardList, setCardList] = useState(0)
    const [background, setBackground] = useState('');
    const [border, setBorder] = useState('');
    const [font, setFont] = useState(null);
    const [cardNumber, setCardNumber] = useState(1)

    useEffect(() => {
        axios.get('https://social-cards-app.onrender.com/cards/', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`
            }
        }).then((response) => {
            console.log(response.data.results)
            setCardList(response.data.results.reverse())
        })

        setCardNumber(cardList.id)
        console.log(cardNumber)

    }, [])

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

    console.log(cardList)
    console.log(cardList.title_text)
    console.log(cardList.card_front_message)
    console.log(cardList.card_back_message)
    console.log(cardList.border)
    console.log(cardList.color)
    console.log(cardList.font)

    return (cardList.length) > 0 && (
        <>
            <h1>Card Feed</h1>
            {cardList.map((card => (
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
                        Created By: <a href={`/viewotherprofile/${card.created_by}`}>{card.created_by}</a>
                        <div className='navigate-cards'>
                        <Button variant="outline-dark"><a href={`/cardview/${card.id}`}>Open Card</a></Button>
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
