import { useState } from 'react'
import Search from './Search.js'
import Results from './Results.js'

const  auth_key = btoa('4f96b20b94d0c2e382d8d516663744f0:3418c931bd19226ace3c0dea40b7b54c').toString('base64');
// btoa 
const SearchContainer = () => {
    const[query, setQuery] = useState([])
    const[results, setResults] = useState([])

    async function handleSubmit(e){
        e.preventDefault()
        // console.log(`Searched for ${query}`)
        try {
            console.log('Hitting the API')
            const URL = `https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${query}`
            //add configuration store the var options
            var options = {
                'method': 'GET',
                'headers': {
                  'Authorization': `Basic ${auth_key}`
                },
              };
            const response = await fetch(URL, options)
            const data = await response.json()
            // console.log(data)
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