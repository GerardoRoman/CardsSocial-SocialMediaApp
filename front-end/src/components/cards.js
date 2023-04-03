import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components'

export default function Cards({cardNumber}) {
    const [cardChoice, setCardChoice] = useState(0)
    const [background, setBackground] = useState('');
    const [border, setBorder] = useState('');
    const [font, setFont] = useState(null);

    
    useEffect(() => {
        axios.get(`https://social-cards-app.onrender.com/cards/${cardNumber}`, {
            headers: {
                'Authorization': 'Token fa66f9917840e2033844150df3f9bf5b96459bbb'
                }
        }).then((response) => {
            console.log(response.data)
            setCardChoice(response.data)
        })

        if (cardChoice.color === 'blue'){
            setBackground('aqua')
        }
        if (cardChoice.color === 'red'){
            setBackground('lightcoral')
        }
        if (cardChoice.color === 'green'){
            setBackground('lightgreen')
        } 
        if (cardChoice.border === 'dotted'){
            setBorder('dotted')
        }
        if (cardChoice.border === 'dashed'){
            setBorder('dashed')
        }
        if (cardChoice.border === 'solid'){
            setBorder('solid')
        } 
        if (cardChoice.font === 'delicious handrawn'){
            setFont('Delicious Handrawn')
        }
        if (cardChoice.font === 'playfair display') {
            setFont('Playfair Display')
        }
        if (cardChoice.font === 'dancing script') {
            setFont('Dancing Script')
        }
        
    }, [cardChoice.color, cardChoice.border, cardChoice.font])

    const StyledTextArea = styled.textarea`
        background-color: rgba(0, 0, 0, 0);
        border-color: rgba(0, 0, 0, 0);
        overflow: auto;
        outline: none;
        // border: 1px solid black;
        width: 75%;
        height: 23rem;
        rows: "33";
        cols: "50";
        resize: none;
        font-family: ${font};
        font-size: 25px;
    `
    const StyledBackArea = styled.textarea`
        background-color: rgba(0, 0, 0, 0);
        border-color: rgba(0, 0, 0, 0);
        outline: none;
        // border: 1px solid black;
        width: 75%;
        height: 23rem;
        rows: "33";
        cols: "50";
        resize: none;
        font-family: ${font};
        font-size: 30px;
        text-align: center;
        margin-top: 30%        
    `


    // const TitleBox = styled.p`
    // background-color: rgba(0, 0, 0, 0);
    // border-color: rgba(0, 0, 0, 0);
    // overflow: auto;
    // outline: none;
    // // border: 1px solid black;
    // width: 100%;
    // height: 3rem;
    // font-family: ${font};
    // font-size: 30px;
    // resize: none;
    // text-align: center;
    // // border-bottom: 2px solid black
    // margin-top: 3px;
    // `

    const BackgroundColor = styled.section`
        background: ${background};
        width: 100%;
        height: 100%;
        `
    const BorderChoice = styled.section`
        border: 5px ${border} black;  
        width: 98%;
        height: 98%;
    `

    const FontChoice = styled.section`
        font-family: ${font};
    `

    console.log(cardChoice)
    console.log(cardChoice.title_text)
    console.log(cardChoice.card_front_message)
    console.log(cardChoice.card_back_message)
    console.log(cardChoice.border)
    console.log(cardChoice.color)
    console.log(cardChoice.font)
    
    return(
        <>
    <h1>Card View</h1>
    <div className='card-container'>
    <div className='card'>
        <h1>FRONT</h1>
    <BackgroundColor> 
        <BorderChoice>  
            <FontChoice>      
    <div> 
            <div className='card-body'>
                <StyledTextArea placeholder='Roses are red...' id='body' name='body'>{cardChoice.card_front_message}</StyledTextArea>              
        </div>
    </div>
            </FontChoice> 
        </BorderChoice>
    </BackgroundColor>
    </div>

    <div className='card'>
        <h1>BACK</h1>
    <BackgroundColor> 
        <BorderChoice>  
            <FontChoice>      
    <div> 
            <div className='card-back'>
                <StyledBackArea placeholder='Sign here' id='back' name='back'>{cardChoice.card_back_message}</StyledBackArea>              
        </div>
    </div>
            </FontChoice> 
        </BorderChoice>
    </BackgroundColor>
    </div>
</div>
        <p className='created-by'>
    Created By: {cardChoice.created_by}
        </p>
    </>
    )
}