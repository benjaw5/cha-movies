import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import getSingleMovie from '../api/singleMovie.js';
import MovieBanner from '../components/MovieBanner.jsx';

function GenrePage() {
    const [movieList, setMovieList] = useState([]);
    const {genreId} = useParams();

    useEffect(() => {
        getSingleMovie("http://localhost:8000/cha-movies/api/single-genre?id="+genreId).then(data => {
            setMovieList(data)
        })
    }, [])

    const movieBanners = movieList.map(movieObject => 
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

export default GenrePage;

