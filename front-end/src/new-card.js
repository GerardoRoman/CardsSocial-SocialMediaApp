import React from 'react';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function NewCard(){
    const [background, setBackground] = useState('');
    const [border, setBorder] = useState('');
    const [font, setFont] = useState(null);
    const title = useRef('')
    const body = useRef('');
    const back = useRef('');
    const colorChoices = ['Blue', 'Red', 'Green'];
    const borderChoices = ['Dotted', 'Dashed', 'Solid'];
    const fontChoices = ['Handwritten', 'Plain', 'Cursive'];
    const navigate = useNavigate()

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
    margin-top: 30%;
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
        console.log('useEffect runs')
    })

    function handlePost(resultsObject){
    axios.post('https://social-cards-app.onrender.com/cards/create/', 
        resultsObject,
    {   
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token fa66f9917840e2033844150df3f9bf5b96459bbb'
        }
    })
    .then(function(response){
        console.log(response);
        navigate("/")
    })
    .catch(function (error) {
        console.log(error);
    })
    ;}

    function handleSubmit(event) {
        event.preventDefault();
    console.log('Background Color: ', background);
    console.log('Border Selection: ', border);
    console.log('Font Selection: ', font);
    console.log('Title Text: ', title.current.value)
    console.log('Body Text: ', body.current.value);
    console.log('Back Text: ', back.current.value);
    const resultsObject = {
        title_text: title.current.value,
        card_front_message: body.current.value,
        card_back_message: back.current.value,
        color: background,
        border: border,
        font: font,
    }
    handlePost(resultsObject)
    }
    
    function backgroundChoice(colors) {
        console.log('clicked')
        if (colors.target.innerText === 'Blue'){
            setBackground('aqua')
        }
        if (colors.target.innerText === 'Red'){
            setBackground('lightcoral')
        }
        if (colors.target.innerText === 'Green'){
            setBackground('lightgreen')
        } 
    }

    function borderChoice(borders) {
        console.log('clicked')
        if (borders.target.innerText === 'Dotted'){
            setBorder('dotted')
        }
        if (borders.target.innerText === 'Dashed'){
            setBorder('dashed')
        }
        if (borders.target.innerText === 'Solid'){
            setBorder('solid')
        } 
    }

    function fontChoice(fonts){
        console.log('clicked')
        if (fonts.target.innerText === 'Handwritten'){
            setFont('Delicious Handrawn')
        }
        if (fonts.target.innerText === 'Plain') {
            setFont('Playfair Display')
        }
        if (fonts.target.innerText === 'Cursive') {
            setFont('Dancing Script')
        }
    }

    return (
        <>
        <h1>New Card</h1>
        <br/>
        <div className='customize-buttons'>
            <br/>
        <span>
            Select a background color!<br/>
        {colorChoices.map(colors => <button className='ind-but' onClick={backgroundChoice}>{colors}</button>)}
        </span>
        <br/>
        <span>
        Select a background border!<br/>
            {borderChoices.map(borders => <button className='ind-but' onClick={borderChoice}>{borders}</button>)}
        </span>
        <br/>
        <span>
        Select a background font!<br/>
            {fontChoices.map(fonts => <button className='ind-but' onClick={fontChoice}>{fonts}</button>)}
        </span>   
        
        </div>
        <div className='card'>
                <h1>COVER</h1>
            <BackgroundColor> 
                <BorderChoice>  
                    <FontChoice>      
            <div> 
                    <div className='card-back'>
                    <TitleBox placeholder='Title' id='title' name='title' ref={title}></TitleBox>                </div>
            </div>
                    </FontChoice> 
                </BorderChoice>
            </BackgroundColor>
            </div>
        <br />
        <br />
        <br />
        <br />
        <div className='card-container'>
            <div className='card'>
                <h1>Inside Left</h1>
            <BackgroundColor> 
                <BorderChoice>  
                    <FontChoice>      
            <div> 
                    <div className='card-body'>
                        <StyledTextArea placeholder='Roses are red...' id='body' name='body' ref={body}></StyledTextArea>              
                </div>
            </div>
                    </FontChoice> 
                </BorderChoice>
            </BackgroundColor>
            </div>

            <div className='card'>
                <h1>Inside Right</h1>
            <BackgroundColor> 
                <BorderChoice>  
                    <FontChoice>      
            <div> 
                    <div className='card-back'>
                        <StyledBackArea placeholder='Sign here' id='back' name='back' ref={back}></StyledBackArea>              
                </div>
            </div>
                    </FontChoice> 
                </BorderChoice>
            </BackgroundColor>
            </div>
        </div>

        <br></br>
        
        <form onSubmit={handleSubmit}>
            <div>
            <label></label>
                <input value={background} readOnly={true} hidden={true}/>
            </div>
            <div>
            <label></label>
                <input value={border} readOnly={true} hidden={true}/>
            </div>
            <div>
            <label></label>
                <input value={font} readOnly={true} hidden={true}/>
            </div>
            <div>
                <label for='body-text'></label>
                <input ref={body} hidden={true}/>
            </div>
            <div>
                <label for='title-text'></label>
                <input ref={title} hidden={true}/>
            </div>
            <div>
            <label for='back-text'></label>
                <input ref={back} hidden />
            </div>
            <div className='submit'>
            <button type='submit'>Submit</button>
            </div>
        </form>
        </>
    );
}

export default NewCard