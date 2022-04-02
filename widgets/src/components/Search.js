import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const search = async () => {
            await axios.get('to do');
        }

        search();

        console.log('Used effect2')

    }, [searchTerm]);

    return <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input 
                        className='input'
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
    </div>
};

export default Search;