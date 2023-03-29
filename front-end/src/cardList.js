import App from "./App";
import { useState } from 'react';
import Cards from "./cards";


export default function CardList(props) {
    const cardArray = ["Card 1", "Card 2", "Card 3"]



    return (
        <ul> {cardArray} </ul>
    )
}
