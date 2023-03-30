import React from 'react';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'


function NewCard(){
    const [background, setBackground] = useState('')
    const [border, setBorder] = useState('')
    const [font, setFont] = useState(null)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const colorChoices = ['Blue', 'Red', 'Green']
    const borderChoices = ['Dotted', 'Dashed', 'Solid']
    const fontChoices = ['Handwritten', 'Plain', 'Cursive']

    const BackgroundColor = styled.section`
        background: ${background};
        width: 100%;
        height: 100%;
        `
    const BorderChoice = styled.section`
        border: 5px ${border} black;  
        width: 99%;
        height: 99%;
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
        <br></br>
        
        <div className='card'>
        <BackgroundColor> 
            <BorderChoice>  
                <FontChoice>      
        <div> 
            <div className='title'>Example Title</div>
                <div className='card-body'>
                    <textarea id='body' rows='25' cols='33' placeholder='Roses are red...'>
                    </textarea>               
            </div>
        </div>
                </FontChoice> 
            </BorderChoice>
        </BackgroundColor>
        </div>
        <br></br>
        <span>
        {colorChoices.map(colors => <button className='color-buttons' onClick={backgroundChoice}>{colors}</button>)}
        </span>
        <span>
            {borderChoices.map(borders => <button className='border-buttons' onClick={borderChoice}>{borders}</button>)}
        </span>
        <span>
            {fontChoices.map(fonts => <button className='font-buttons'onClick={fontChoice}>{fonts}</button>)}
        </span>
        
        <form onSubmit={handleSubmit}>
            <div>
            <label>Color Choice: </label>
                <input value={background} readOnly={true}></input>
            </div>
            <div>
            <label>Border Choice: </label>
                <input value={border} readOnly={true}></input>
            </div>
            <div>
            <label>Font Choice: </label>
                <input value={font} readOnly={true}></input>
            </div>
            <button type='submit'>Submit</button>
        </form>
        
        </>
    );
}

export default NewCard