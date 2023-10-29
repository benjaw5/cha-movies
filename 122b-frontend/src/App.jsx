import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, {Component} from 'react';
import HomePage from './pages/HomePage';
import TopMoviesPage from './pages/TopMoviesPage'
import MoviePage from './pages/MoviePage'
import ActorPage from './pages/ActorPage'
import LoginPage from './pages/LoginPage'
import GenrePage from './pages/GenrePage'
import TitlePage from './pages/TitlePage'
import Navbar from './components/Navbar'

function App() {
    return (
        <>
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route path='/cha-movies' element = {<HomePage/>} />
                <Route path='/cha-movies/genre/:genreId' element = {<GenrePage />}/>
                <Route path='/cha-movies/title/:title' element = {<TitlePage />}/>
                <Route path='/cha-movies/ranked' element = {<TopMoviesPage/>} />
                <Route path='/cha-movies/movies/:movieId' element = {<MoviePage/>} />
                <Route path='/cha-movies/actors/:actorId' element = {<ActorPage/>} />
                <Route path='/cha-movies/login' element = {<LoginPage/>} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App