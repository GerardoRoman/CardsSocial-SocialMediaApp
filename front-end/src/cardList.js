import App from "./App";
import { useState } from 'react';
import Cards from "./cards";


export default function CardList() {
    const cardArray = ["Card 1", "Card 2", "Card 3"]
    // const []



    return (
        <>
            <ul>
                {cardArray.map((listingCards) => (
                    <li> {listingCards} </li>
                ))}
            </ul>
        </>
    )
}
