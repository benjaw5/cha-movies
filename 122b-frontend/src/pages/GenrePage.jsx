import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import getSingleMovie from '../api/singleMovie.js';
import MovieBanner from '../components/MovieBanner.jsx';
import Pagination from '../pagination/Pagination.jsx';

function GenrePage() {
    const [movieList, setMovieList] = useState([]);
    const {genreId} = useParams();

    //Pagination variables
    const [page_num, set_page_num] = useState(1);
    const [moviePerPage, setMoviePerPage] = useState(10);
    const lastMovieIndex = page_num * moviePerPage;
    const firstMovieIndex = lastMovieIndex - moviePerPage;
    const [totalMovies, setTotalMovies] = useState(0);

    useEffect(() => {
        getSingleMovie("http://localhost:8000/cha-movies/api/single-genre?id="+genreId).then(data => {
            setTotalMovies(data.length)

            const currentMovieData = data.slice(firstMovieIndex, lastMovieIndex)

            setMovieList(currentMovieData)
        })
    }, [page_num])

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
        <div>
            <Pagination
                totalMovies={totalMovies}
                moviesPerPage={moviePerPage}
                setCurrentPage={set_page_num}
                currentPage={page_num}
            />
        </div>
        </>
    )
}

export default GenrePage;

