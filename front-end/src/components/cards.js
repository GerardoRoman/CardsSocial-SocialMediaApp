import { useEffect, useState } from 'react';
import axios from 'axios'

// need to connect it to values of the colors/border/font
// on click flip back function 
export default function Cards() {
    const [cardChoice, setCardChoice] = useState(0)


    useEffect(() => {
        axios.get("https://social-cards-app.onrender.com/cards/").then((response) => {
            console.log(response.data.results)
            setCardChoice(response.data.results)
        })
    }, [])

    if (cardChoice) {
        return cardChoice && (
            <ul>
                {cardChoice.map((cardObject) => (
                    // list out texts, call on the values for the other pieces 
                    <li> {cardObject.color} {cardObject.border} {cardObject.font}</li>
                ))}
            </ul>
        )
    }
}