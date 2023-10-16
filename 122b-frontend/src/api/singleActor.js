import React, {Component} from 'react';


async function getSingleActor(id) {
    let apiLink = "/cs122b_fall22_project1_star_example/api/single-star?id="+id;
    try {
        const response = await fetch(apiLink, {
            method: "GET"
        });
        const data = await response.json();
        return data
    }
    catch (error) {
        console.error("Error when fetching top movies from ", apiLink);
    }

}


export default getSingleActor;