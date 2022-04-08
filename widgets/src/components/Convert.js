import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GOOGLE_TRANSLATE_API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({language, text})=>{

    const [result, setResult] = useState([]);
    const [debouncedTerm, setDebouncedTerm] = useState('');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedTerm(text)
        }, 500 );

        return ()=> {
            clearTimeout(timeoutId);
        }
    }, [text]);

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',
                {}, {
                     params: {
                        q:debouncedTerm,
                        target: language.value,
                        key: GOOGLE_TRANSLATE_API_KEY
                     }
            })

            setResult(data.data.translations[0].translatedText);
        }
        search();
     },
     [language,debouncedTerm]
    )

    return (
        <div >
            <h1 className='ui header'>{result}</h1>
        </div>
    )
}
export default Convert;