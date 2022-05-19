import Banner from "./Banner"
import Footer from "./Footer"


const Search = (props) => {

    return(
        <>
        <Banner/>
        <h1 className="enterDestination">Enter a destination!</h1>
            <form onSubmit={props.handleSubmit} className="searchbar">
                <input type="text" className="search-input" onChange={props.handleChange} value={props.query}/>
                <button className="button">Search</button>
            </form>
            <Footer />
        </>
    )
}

 export default Search