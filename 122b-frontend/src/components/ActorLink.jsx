
function ActorLink({id, name}) {
    return (
        <>
        <a href={"/cha-movies/actors/"+id}> <p>{name}</p></a>
        </>
    )
}

export default ActorLink;