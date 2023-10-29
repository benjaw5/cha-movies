import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, {Component} from 'react';
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import ActorPage from './pages/ActorPage'
import LoginPage from './pages/LoginPage'

function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/cha-movies' element = {<HomePage/>} />
                <Route path='/cha-movies/movies/:movieId' element = {<MoviePage/>} />
                <Route path='/cha-movies/actors/:actorId' element = {<ActorPage/>} />
                <Route path='/cha-movies/login' element = {<LoginPage/>} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App