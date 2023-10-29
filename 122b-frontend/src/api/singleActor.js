import React, {Component} from 'react';

async function getSingleActor(id) {
    let apiLink = "http://localhost:8000/cha-movies/api/single-star?id="+id;
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


export default getSingleActor;