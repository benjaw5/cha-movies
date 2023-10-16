import ActorLink from '../components/ActorLink';

function MovieBanner(movieObject) {
    let movie = movieObject.movieObject;
    let actorInfo = movie.movie_stars.split(',');
    const actorList = actorInfo.map(info => {
        let infoSplit = info.split(':');
        return <ActorLink path = {'actors/' + infoSplit[0]} id = {infoSplit[0]} name = {infoSplit[1]}/>
    })
    return (
        <tr>
            <td><a href={"/cs122b_fall22_project1_star_example/movies/"+movie.movie_id}>{movie.movie_title}</a></td>
            <td>{movie.movie_year}</td>
            <td>{movie.movie_director}</td>
            <td>{movie.movie_rating}</td>
            <td>{actorList}</td>
            <td>{movie.movie_genres}</td>
        </tr>
    )
}

export default MovieBanner;