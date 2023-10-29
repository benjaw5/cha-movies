import React, {Component} from 'react';


async function getAllGenres() {
    let apiLink = "http://localhost:8000/cha-movies/api/genre";
    try {
        const response = await fetch(apiLink, {
            method: "GET"
        });
        const data = await response.json();
        return data
    }
    catch (error) {
        console.error("Error when fetching genres from ", apiLink);
    }

}


export default getAllGenres;