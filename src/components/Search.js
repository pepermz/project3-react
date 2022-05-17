import Banner from "./Banner"


const Search = (props) => {

    return(
        <>
        <Banner/>
        <h1 className="enterDestination">Enter a destination!</h1>
            <form onSubmit={props.handleSubmit} className="searchbar">
                <input type="text" onChange={props.handleChange} value={props.query}/>
                <button>Search</button>
            </form>
        </>
    )
}

 export default Search