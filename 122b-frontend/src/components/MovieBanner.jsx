

function MovieBanner(movieObject) {
    let movie = movieObject.movieObject
    return (
        <li>
            <a href={"/movies/"+movie.movie_id}><h3>{movie.movie_title}</h3></a>
            <p>{movie.movie_year}</p>
            <p>{movie.movie_director}</p>
            <p>{movie.movie_rating}</p>
            <p>{movie.movie_stars}</p>
            <p>{movie.movie_genres}</p>
        </li>
    )
}

export default MovieBanner;