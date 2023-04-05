import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'


export default function Edit({ token }) {
    const [cardChoice, setCardChoice] = useState(0)
    const [background, setBackground] = useState('');
    const [border, setBorder] = useState('');
    const [font, setFont] = useState(null);
    const { cardNumber } = useParams()


    useEffect(() => {
        axios.get(`https://social-cards-app.onrender.com/cards/${cardNumber}`, {
            headers: {
                Authorization: `Token ${token}`
            }
        }).then((response) => {
            console.log(response.data)
            setCardChoice(response.data)
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
    font-family: ${props => props.font};
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
        font-family: ${cardChoice.font};
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
        font-family: ${cardChoice.font};
        font-size: 30px;
        text-align: center;
        margin-top: 30%        
    `

    const BackgroundColor = styled.section`
        background: ${cardChoice.color};
        width: 100%;
        height: 100%;
        `
    const BorderChoice = styled.section`
        border: 5px ${cardChoice.border} black;  
        width: 98%;
        height: 98%;
    `

    const FontChoice = styled.section`
        font-family: ${cardChoice.font};
    `

    function handleSubmit(event) {
        console.log('click)')
            event.preventDefault();
            console.log('Background Color: ', background);
            console.log('Border Selection: ', border);
            console.log('Font Selection: ', font);
            // console.log('Title Text: ', title.current.value)
            // console.log('Body Text: ', body.current.value);
            // console.log('Back Text: ', back.current.value);
    }

    return (
        <>
            <h1>Card View</h1>
                <div className='card'>
                <h4>COVER</h4>
                            <BackgroundColor background={cardChoice.color}>
                                <BorderChoice border={cardChoice.border}>
                                    <FontChoice font={cardChoice.font}>
                                        <div>
                                            <div className='card-back'>
                                                <TitleBox placeholder='Title' id='title' name='title'>{cardChoice.title_text}</TitleBox>
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
                    <h1>Inside Right</h1>
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
            <br />
            <br />
            <p className='created-by'>
                Created By: {cardChoice.created_by}
            </p>
            <form className='edit-form' onClick={handleSubmit}>
                <div>
                    <label>Background color: </label>
                    <select defaultValue={cardChoice.color}  >
                        <option value="red">Red</option>
                        <option value='blue'>Blue</option>
                        <option value='green'>Green</option>
                        </select>
                </div>
                <div>
                    <label>Border type: </label>
                    <select defaultValue={cardChoice.border}  >
                        <option value="dashed">Dashed</option>
                        <option value='dotted'>Dotted</option>
                        <option value='solid'>Solid</option>
                        </select>
                </div>
                <div>
                    <label>Font type: </label>
                    <select defaultValue={cardChoice.font}  >
                        <option value="Dancing Script">Cursive</option>
                        <option value='Delicious Handrawn'>Handwritten</option>
                        <option value='Playfair Display'>Plain</option>
                        </select>
                </div>
                <div>
                    <label for='title-text'>Cover text: </label>
                    <textarea value={cardChoice.title_text}/>
                </div>
                <div>
                    <label for='body-text'>Inside left: </label>
                    <textarea value={cardChoice.card_front_message}/>
                </div>
                <div>
                    <label for='back-text'>Inside Right: </label>
                    <textarea value={cardChoice.card_back_message}/>
                </div>
                <div className='submit'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </>
    )
}