import '../css/card.css';
import '../css/statesuf.css';
import { useState } from 'react';
import { TextField } from '@mui/material';
import CardsList from '../components/CardsList';


export default function StatesUf() {
    
    const [inputText, setInputText] = useState("");

    const pattern = /^[a-zA-Z\s]*$/;
    
    let inputHandler = (text) => {
        // convert input text to lower case
        let lowerCase = text.target.value.toLowerCase();
        setInputText(lowerCase);
    }

    const isValidChar = (char) => {
        if (pattern.test(inputText) || inputText === '') {
            return true;
        }
        return false;
    }

    return (
        <>
            <div id='search-bar-container' className='d-flex justify-content-center py-4 text-dark'>
                <div className='search'>
                    <TextField
                    id='outlined-basic-error-helper'
                    onChange={inputHandler}
                    variant='filled'
                    fullWidth
                    label='Digite o Estado ou UF aqui'
                    />
                    <span>{isValidChar()? '' : 'Digite apenas letras.'}</span>
                </div>
            </div>
            
            <main id='cards-container' className='px-4 align-self-center'>
                <CardsList input={inputText}/>
            </main>
        </>
    );
}