import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import getSingleMovie from '../api/singleMovie'

function MoviePage() {
    const [movieObject, setMovieObject] = useState([]);
    const {movieId} = useParams()
    console.log(movieId)
    useEffect(() => {
        getSingleMovie(movieId).then(data => {
            setMovieObject(data[0])
        })
    }, [])


    return (
            <>
            <p>{movieObject.movie_title}</p>
            <p>{movieObject.movie_year}</p>
            <p>{movieObject.movie_director}</p>
            <p>{movieObject.movie_genres}</p>
            <p>{movieObject.movie_stars}</p>
            <p>{movieObject.movie_rating}</p>
            </>
    )
}

export default MoviePage