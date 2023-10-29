import React, {useState, useEffect} from 'react'
import getTopMovies from '../api/topMovies.js'
import MovieBanner from '../components/MovieBanner.jsx'
import Pagination from "../pagination/Pagination.jsx";

function HomePage() {
    const [topMovieList, setTopMovieList] = useState([]);

    const [page_num, set_page_num] = useState(1);
    const [moviePerPage, setMoviePerPage] = useState(10);
    const lastMovieIndex = page_num * moviePerPage;
    const firstMovieIndex = lastMovieIndex - moviePerPage;
    const [totalMovies, setTotalMovies] = useState(0);

    useEffect(() => {
        getTopMovies().then(movieData => {
            setTotalMovies(movieData.length)

            const currentMovieData = movieData.slice(firstMovieIndex, lastMovieIndex)

            setTopMovieList(currentMovieData)

        }).catch(error => {
            console.log("page_num: " + page_num)
            console.log("moviePerPage: " + moviePerPage)
            console.log("lastMovieIndex: " + lastMovieIndex)
            console.log("firstMovieIndex: " + firstMovieIndex)
            console.log("totalMovies", totalMovies)
            console.log("Error when getting top movies")
        })
    }, [page_num])

    const movieBanners = topMovieList.map(movieObject => 
        <MovieBanner movieObject = {movieObject}/>
    )



    return (
        <>

        <table>
            <tbody>
                <tr>
                    <th>Title</th>
                    <th>Year</th> 
                    <th>Director</th> 
                    <th>Rating</th> 
                    <th>Stars</th> 
                    <th>Genres</th> 
                </tr>
            </tbody>
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

export default HomePage