import React, {Component} from 'react';

async function getTopMovies() {
    const apiLink = "/cha-movies/api/movies";

    try {
        const response = await fetch(apiLink, {
            method: "GET",

        });
        const data = await response.json();
        return data
    }
    catch (error) {
        console.error("Error when fetching top movies from ", apiLink);
    }
}

export default getTopMovies;