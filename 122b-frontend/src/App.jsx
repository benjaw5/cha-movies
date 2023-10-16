import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, {Component} from 'react';
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import ActorPage from './pages/ActorPage'
import What from './components/test';

function App() {
    return (
        <>
        <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE}>
            <Routes>
                <Route path='/cs122b_fall22_project1_star_example' element = {<HomePage/>} />
                
                <Route path='/cs122b_fall22_project1_star_example/hi' element = {<What/>} />
                <Route path='/cs122b_fall22_project1_star_example/movies/:movieId' element = {<MoviePage/>} />
                <Route path='/cs122b_fall22_project1_star_example/actors/:actorId' element = {<ActorPage/>} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App