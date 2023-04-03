import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components'

// need to connect it to values of the colors/border/font
// on click flip back function 
export default function Cards() {
    const [cardChoice, setCardChoice] = useState(0)
    const [background, setBackground] = useState('');
    const [border, setBorder] = useState('');
    const [font, setFont] = useState(null);
    const Title = useRef('')
    const Body = useRef('');
    const Back = useRef('')
    const colorChoices = ['Blue', 'Red', 'Green'];
    const borderChoices = ['Dotted', 'Dashed', 'Solid'];
    const fontChoices = ['Handwritten', 'Plain', 'Cursive'];

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
        font-size: 30px;
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


    const TitleBox = styled.input`
    background-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
    overflow: auto;
    outline: none;
    // border: 1px solid black;
    width: 100%;
    height: 3rem;
    font-family: ${font};
    font-size: 30px;
    resize: none;
    text-align: center;
    // border-bottom: 2px solid black
    margin-top: 3px;
    `

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


    useEffect(() => {
        axios.get("https://social-cards-app.onrender.com/cards/1").then((response) => {
            console.log(response.data)
            setCardChoice(response.data)
        })
    }, [])

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
        <TitleBox placeholder='Title' id='title' name='title' ref={Title}></TitleBox>
            <div className='card-body'>
                <StyledTextArea placeholder='Roses are red...' id='body' name='body' ref={Body}></StyledTextArea>              
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
                <StyledBackArea placeholder='Sign here' id='back' name='back' ref={Back}></StyledBackArea>              
        </div>
    </div>
            </FontChoice> 
        </BorderChoice>
    </BackgroundColor>
    </div>
</div>
    </>
    )
}