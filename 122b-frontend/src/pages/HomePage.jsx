import {useState, useEffect} from 'react'
import getTopMovies from '../api/topMovies.js'
import MovieBanner from '../components/MovieBanner.jsx'

function HomePage() {
    const [topMovieList, setTopMovieList] = useState([]);

    useEffect(() => {
        getTopMovies().then(movieData => {
            setTopMovieList(movieData)
        }).catch(error => {
            console.log("Error when getting top movies")
        })
    }, [])

    const movieBanners = topMovieList.map(movieObject => 
        <MovieBanner movieObject = {movieObject}/>
    )
    
    return (
        <ul>{movieBanners}</ul>
    )
}

export default HomePage