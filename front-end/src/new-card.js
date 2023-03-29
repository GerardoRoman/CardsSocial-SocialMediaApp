import React from 'react';
import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import styled, { css } from 'styled-components'


function NewCard(){
    const [background, setBackground] = useState('')
    const [border, setBorder] = useState('')
    const [font, setFont] = useState(null)
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
        width: 100%;
        height: 100%;
    `

    const FontChoice = styled.section`
        font-family: ${font};
    `
  
   

    useEffect(() => {
        console.log('useEffect runs')
    })

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
                    Example Text               
            </div>
        </div>
                </FontChoice> 
            </BorderChoice>
        </BackgroundColor>
        </div>
        <br></br>
        <span>
        {colorChoices.map(colors => <button onClick={backgroundChoice}>{colors}</button>)}
        </span>
        <span>
            {borderChoices.map(borders => <button onClick={borderChoice}>{borders}</button>)}
        </span>
        <span>
            {fontChoices.map(fonts => <button onClick={fontChoice}>{fonts}</button>)}
        </span>
        
        </>
    );
}

export default NewCard