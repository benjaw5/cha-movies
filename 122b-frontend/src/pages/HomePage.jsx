import {useState, useEffect} from 'react'
import '../styles/HomePage.css'
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
        <>
        <table>
            <tr>
               <th>Title</th> 
               <th>Year</th> 
               <th>Director</th> 
               <th>Rating</th> 
               <th>Stars</th> 
               <th>Genres</th> 
            </tr>
            {movieBanners}
        </table>
        </>
        
    )
}

export default HomePage