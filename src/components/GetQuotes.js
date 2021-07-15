import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import './getquotes.css';
import { QUOTES } from './Queries';
import Sig from './useful/teddysig.png';

export default function GetQuotes() {
    const {data} = useQuery(QUOTES)
    const [quotes, setQuotes] = useState([]);
    useEffect(() => {
        if(data){
            setQuotes(data.quotes[Math.floor(Math.random() * data.quotes.length)]);
            }
    },[data]);
    
    console.log(quotes)
    return (
        <div>
            
            <div className="quote" key={quotes.id}>
            {<p>{quotes.content}</p>}
            {<img className="sig" src={Sig}/>}
            </div>
            
        </div>
    )
}
