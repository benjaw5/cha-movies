import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import MovieLink from '../components/MovieLink';
import getSingleActor from '../api/singleActor'

function ActorPage() {
    const [actorObject, setActorObject] = useState([]);
    const [movieList, setMovieList] = useState([]);
    const {actorId} = useParams()

    useEffect(() => {
        getSingleActor(actorId).then(data => {
            setActorObject(data[0])
        })
    }, [])

    useEffect(() => {
        if (actorObject.star_movies) {
            let movieInfo = actorObject.star_movies.split(',');
            const getMovieList = movieInfo.map(info => {
                let infoSplit = info.split(';');
                return <MovieLink path = {'../movies/' + infoSplit[0]} id = {infoSplit[0]} name = {infoSplit[1]}/>
            })
            setMovieList(getMovieList);
        }
    }, [actorObject])



    return (
            <>
            <a href={"/"}><h3>{"Top 20 Movies"}</h3></a>
            <p>{actorObject.star_name}</p>
            <p>{actorObject.star_dob}</p>
            <p>{movieList}</p>
            </>
    )
}

export default ActorPage