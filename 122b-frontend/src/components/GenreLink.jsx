

function GenreLink({id, genre}) {
    return (
        <a href={"/cha-movies/genre/" + id}><p>{genre}</p></a>
    )
}

export default GenreLink;