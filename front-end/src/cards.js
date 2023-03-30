import App from "./App";
import { useState } from 'react';
import CardList from "./cardList";


export default function Cards(props) {
    const cardInfo = [
        { color: 'green', border: 'solid', font: 'r' },
        { color: 'black', border: 'solid', font: 'r' },
        { color: 'black', border: 'dots', font: 'q' },
        { color: 'pink', border: 'stripes', font: 'q' },
    ]

    return (
        <ul>
            {cardInfo.map((cardObject) => (
                <li> {cardObject.color} {cardObject.border} {cardObject.font}</li>
            ))}
        </ul>
    )
}