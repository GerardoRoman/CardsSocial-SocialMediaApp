import Avatar from './profile-icon.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function ViewOtherProfile (username, token) {
    const [cardList, setCardList] = useState(0)
    const [cardNumber, setCardNumber] = useState(1)

    useEffect(() => {
        axios.get('https://social-cards-app.onrender.com/cards/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token fa66f9917840e2033844150df3f9bf5b96459bbb'
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

    return (
        <h1>Hi!</h1>
    )
}