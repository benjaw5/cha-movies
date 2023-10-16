import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, {Component} from 'react';
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import ActorPage from './pages/ActorPage'


function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/cs122b-fall22-project1-star-example' element = {<HomePage/>} />
                <Route path='/cs122b-fall22-project1-star-example/movies/:movieId' element = {<MoviePage/>} />
                <Route path='/cs122b-fall22-project1-star-example/actors/:actorId' element = {<ActorPage/>} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App