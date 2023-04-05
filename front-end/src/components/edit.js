import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'


export default function Edit({ token }) {
    const [cardChoice, setCardChoice] = useState(0)
    const [background, setBackground] = useState('');
    const [border, setBorder] = useState('');
    const [font, setFont] = useState(null);
    const [coverText, setCoverText] = useState('')
    const [insideLeft, setInsideLeft] = useState('')
    const [isnideRight, setInsideRight] = useState('')
    const { cardNumber } = useParams()


    useEffect(() => {
        axios.get(`https://social-cards-app.onrender.com/cards/${cardNumber}`, {
            headers: {
                Authorization: `Token ${token}`
            }
        }).then((response) => {
            console.log(response.data)
            setCardChoice(response.data)
            setBackground(response.data.color)
            setBorder(response.data.border)
            setFont(response.data.border)
            setCoverText(response.data.title_text)
            setInsideLeft(response.data.card_front_message)
            setInsideRight(response.data.card_back_message)
        })
    }, [])



    const TitleBox = styled.p`
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

    function handleSubmit(event) {
        console.log('click)')
            event.preventDefault();
            const resultsObject = {
                title_text: coverText,
                card_front_message: insideLeft,
                card_back_message: isnideRight,
                color: background,
                border: border,
                font: font,
            }
            console.log(resultsObject)
    }

    return (
        <>
            <h1>Card View</h1>
                <div className='card'>
                <h4>COVER</h4>
                            <BackgroundColor background={background}>
                                <BorderChoice border={background}>
                                    <FontChoice font={background}>
                                        <div>
                                            <div className='card-back'>
                                                <TitleBox placeholder='Title' id='title' name='title'
                                                onChange={(event) => setCoverText(event.target.value)}>{coverText}</TitleBox>
                                            </div>
                                        </div>
                                    </FontChoice>
                                </BorderChoice>
                            </BackgroundColor>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            <div className='card-container'>
                <div className='card'>
                    <h1>Inside Left</h1>
                    <BackgroundColor>
                        <BorderChoice >
                            <FontChoice>
                                <div>
                                    <div className='card-body'>
                                        <StyledTextArea placeholder='Roses are red...' id='body' name='body' 
                                        onChange={(event) => setInsideLeft(event.target.value)}>{insideLeft}</StyledTextArea>
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
                                        <StyledBackArea placeholder='Sign here' id='back' name='back'
                                        onChange={(event) => setInsideRight(event.target.value)}>{isnideRight}</StyledBackArea>
                                    </div>
                                </div>
                            </FontChoice>
                        </BorderChoice>
                    </BackgroundColor>
                </div>
            </div>
            <br />
            <br />
            <p className='created-by'>
                Created By: {cardChoice.created_by}
            </p>
            <form className='edit-form' onClick={handleSubmit}>
                <div>
                    <label>Background color: </label>
                    <select onChange={(event) => setBackground(event.target.value)} >
                        <option value="lightcoral">Red</option>
                        <option value='aqua'>Blue</option>
                        <option value='lightgreen'>Green</option>
                        </select>
                </div>
                <div>
                    <label>Border type: </label>
                    <select onChange={(event) => setBorder(event.target.value)} >
                        <option value="dashed">Dashed</option>
                        <option value='dotted'>Dotted</option>
                        <option value='solid'>Solid</option>
                        </select>
                </div>
                <div>
                    <label>Font type: </label>
                    <select onChange={(event) => setFont(event.target.value)} >
                        <option value="Dancing Script">Cursive</option>
                        <option value='Delicious Handrawn'>Handwritten</option>
                        <option value='Playfair Display'>Plain</option>
                        </select>
                </div>
                <div className='submit'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </>
    )
}