import { useState } from 'react'
import Search from './Search'


const SearchContainer = () => {
    const[query, setQuery] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        console.log(`Searched for ${query}`)
    }
    
    function handleChange(e){
        (e) => setQuery(e.target.value)
    }

    return(
        <>
            <Search handleSubmit={handleSubmit} handleChange={handleChange} query={query} />
        </>
    )
}

export default SearchContainer