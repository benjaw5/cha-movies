import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import ActorPage from './pages/ActorPage'

function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<HomePage/>} />
                <Route path='/movies/:movieId' element = {<MoviePage/>} />
                <Route path='/movies/:actorId' element = {<ActorPage/>} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App