import React, { useState, useEffect } from 'react';
import axios from 'axios';


const regex = /(<([^>]+)>)|(&quot;)/gi //NEW

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params:{
                    action:'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: {searchTerm}
                }
            });
            setResults(data.query.search)
        }
        if(searchTerm){
            search();
        }
        
        console.log('Used effect2')

    }, [searchTerm]);

    const renderedResults = results.map((result) => {
        
        const cleanSnippet = result.snippet.replace(regex, "");
       // <span dangerouslySetInnerHTML={ {__html: result.snippet}}></span>
        
        return (
            <div key={result.pageid} className='item'>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    
                    {cleanSnippet}
                </div>
            </div>
        );
    })

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
            <div className="ui celled list">{renderedResults}</div>
    </div>
};

export default Search;