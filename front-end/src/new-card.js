import React from 'react';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'
import axios from 'axios'



function NewCard(){
    const [background, setBackground] = useState('');
    const [border, setBorder] = useState('');
    const [font, setFont] = useState(null);
    const Title = useRef('')
    const Body = useRef('');
    const Back = useRef('')
    const colorChoices = ['Blue', 'Red', 'Green'];
    const borderChoices = ['Dotted', 'Dashed', 'Solid'];
    const fontChoices = ['Handwritten', 'Plain', 'Cursive'];
    const [resultsObject, setResultsObject] = useState([]);
    const [disabled, setDisabled] = useState(true)
    const [enabled, setEnabled] = useState(false)

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
        console.log('useEffect runs')
    })

    function handleSubmit(event) {
        event.preventDefault();
    console.log('Background Color: ', background);
    console.log('Border Selection: ', border);
    console.log('Font Selection: ', font);
    console.log('Title Text: ', Title.current.value)
    console.log('Body Text: ', Body.current.value);
    console.log('Back Text: ', Back.current.value);
    setResultsObject({
        title_text: Title.current.value,
        card_front_message: Body.current.value,
        card_back_message: Back.current.value,
        color: background,
        border: border,
        font: font,
    })
    setDisabled(false)
    setEnabled(true)
    }

    console.log(resultsObject)

    function handlePost(){
    axios.post('https://social-cards-app.onrender.com/cards/create/', 
        resultsObject,
    {
        'Content-Type': 'application/json'
    })
    .then(function(response){
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    setDisabled(true)
    setEnabled(false)
    ;}
    
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
        <br />
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

        <br></br>
        
        <form onSubmit={handleSubmit}>
            <div>
            <label></label>
                <input value={background} readOnly={true} hidden={true}></input>
            </div>
            <div>
            <label></label>
                <input value={border} readOnly={true} hidden={true}></input>
            </div>
            <div>
            <label></label>
                <input value={font} readOnly={true} hidden={true}></input>
            </div>
            <div>
                <label for='body-text'></label>
                <input value={Body.current} hidden={true}></input>
            </div>
            <div>
                <label for='title-text'></label>
                <input value={Title.current} hidden={true}></input>
            </div>
            <div>
            <label for='back-text'></label>
                <input value={Back.current} hidden ></input>
            </div>
            <div className='submit'>
            <button type='submit' readOnly={true} disabled={enabled}>Set Card</button>
            <button onClick={handlePost} disabled={disabled}>POST</button>
            </div>
        </form>
        </>
    );
}

export default NewCard