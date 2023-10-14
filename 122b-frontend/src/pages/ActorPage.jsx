import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import getSingleActor from '../api/singleActor'

function ActorPage() {
    const [actorObject, setActorObject] = useState([]);
    const {actorId} = useParams()

    useEffect(() => {
        getSingleActor(actorId).then(data => {
            setActorObject(data[0])
        })
    }, [])


    return (
            <>
            <p>{actorObject.star_name}</p>
            <p>{actorObject.star_dob}</p>
            <p>{actorObject.star_movies}</p>
            </>
    )
}

export default ActorPage