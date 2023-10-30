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
import SearchPage from './pages/SearchPage';
import CartPage from './pages/CartPage';
import { SiteStyle, NavbarStyle } from './styles/Site.style';
import { MovieTable } from './styles/Movie.style';
import PaymentPage from './pages/PaymentPage';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
    return (
        <SiteStyle>

        <NavbarStyle>
        <a href="/cha-movies/" class="homeLink">Home</a>
        <Navbar />
        <a href="/cha-movies/ranked">Ranked Movies</a>
        <a href="/cha-movies/login">Login</a>
        <a href="/cha-movies/cart">Checkout</a>
        </NavbarStyle>

        <MovieTable>
        <BrowserRouter>
            <Routes>
                <Route path='/cha-movies' element = {<HomePage/>} />
                <Route path='/cha-movies/payment/confirmation' element={<ConfirmationPage/>} />
                <Route path='/cha-movies/payment' element={<PaymentPage/>} />
                <Route path='/cha-movies/cart' element = {<CartPage/>} />
                <Route path='/cha-movies/search' element = {<SearchPage />} />
                <Route path='/cha-movies/genre/:genreId' element = {<GenrePage />}/>
                <Route path='/cha-movies/title/:title' element = {<TitlePage />}/>
                <Route path='/cha-movies/ranked' element = {<TopMoviesPage/>} />
                <Route path='/cha-movies/movies/:movieId' element = {<MoviePage/>} />
                <Route path='/cha-movies/actors/:actorId' element = {<ActorPage/>} />
                <Route path='/cha-movies/login' element = {<LoginPage/>} />
            </Routes>
        </BrowserRouter>
        </MovieTable>
        </SiteStyle>
    )
}

export default App