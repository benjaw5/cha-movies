import ActorLink from '../components/ActorLink';
import GenreLink from '../components/GenreLink';
import CartButton from './CartButton';

function MovieBanner(movieObject) {
    let movie = movieObject.movieObject;
    let actorInfo = movie.movie_stars.split(',');
    const actorList = actorInfo.map(info => {
        let infoSplit = info.split(':');
        return <ActorLink id = {infoSplit[0]} name = {infoSplit[1]}/>
    })

    let genreInfo = movie.movie_genres.split(',');
    const genreList = genreInfo.map(info => {
        let infoSplit = info.split(':');
        return <GenreLink id = {infoSplit[0]} genre = {infoSplit[1]}/>
    })

 
    return (
        <tr>
            <td><a href={"/cha-movies/movies/"+movie.movie_id}>{movie.movie_title}</a></td>
            <td>{movie.movie_year}</td>
            <td>{movie.movie_director}</td>
            <td>{movie.movie_rating}</td>
            <td>{actorList}</td>
            <td>{genreList}</td>
            <td><CartButton title = {movie.movie_title} action = "purchase" displayName="Purchase"/></td>
        </tr>
    )
}

export default MovieBanner;