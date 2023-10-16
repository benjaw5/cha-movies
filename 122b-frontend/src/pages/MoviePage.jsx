import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import ActorLink from '../components/ActorLink';
import getSingleMovie from '../api/singleMovie'

function MoviePage() {
    const [movieObject, setMovieObject] = useState([]);
    const [actorList, setActorList] = useState([]);
    const {movieId} = useParams()

    useEffect(() => {
        getSingleMovie(movieId).then(data => {
            setMovieObject(data[0])
        })
    }, [])

    useEffect(() => {
        if (movieObject.movie_stars) {
            let actorInfo = movieObject.movie_stars.split(',');
            const getActorList = actorInfo.map(info => {
                let infoSplit = info.split(':');
                return <ActorLink path = {'../actors/' + infoSplit[0]} id = {infoSplit[0]} name = {infoSplit[1]}/>
            })
            setActorList(getActorList);

        }
    }, [movieObject])

    


    return (
            <>
            <a href={"/cs122b_fall22_project1_star_example_war/"}><h3>{"Top 20 Movies"}</h3></a>
            <p>{movieObject.movie_title}</p>
            <p>{movieObject.movie_year}</p>
            <p>{movieObject.movie_director}</p>
            <p>{movieObject.movie_genres}</p>
            <p>{actorList}</p>
            <p>{movieObject.movie_rating}</p>
            </>
    )
}

export default MoviePage