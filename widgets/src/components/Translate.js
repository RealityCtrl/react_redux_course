import React, { useState } from 'react';
import Dropdown from './Dropdown'
import Convert from './Convert';

const languageOptions = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label:'Dutch',
        value: 'nl'
    }
]

const Translate = () => {

    const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>

            {languageOptions ? 
                <Dropdown 
                label='Select language'
                selected={selectedLanguage}
                onSelectedChange={setSelectedLanguage}
                options={languageOptions}/>
                : null 
            }
            <h2>Output</h2>
            <Convert text={text} language={selectedLanguage} />
        </div>
    )
}

export default Translate;