import { useState } from 'react'
import Search from './Search.js'
import Results from './Results.js'


const SearchContainer = () => {
    const[query, setQuery] = useState([])
    const[results, setResults] = useState([])
    const apikey = process.env.REACT_APP_ACCESS_KEY;
    const  auth_key = btoa(apikey).toString('base64');
    async function handleSubmit(e){
        e.preventDefault()
        try {
            console.log('Hitting the API')
            const URL = `https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${query}`
            var options = {
                'method': 'GET',
                'headers': {
                  'Authorization': `Basic ${auth_key}`
                },
              };
            const response = await fetch(URL, options)
            const data = await response.json()
            setResults(data.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    function handleChange(e){
        setQuery(e.target.value)
    }

    return(
        <>
            <Search handleSubmit={handleSubmit} handleChange={handleChange} query={query} />
            <Results results={results}/>
        </>
    )
}

export default SearchContainer