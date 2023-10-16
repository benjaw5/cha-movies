

async function getSingleMovie(id) {
    let apiLink = "/cs122b-fall22-project1-star-example/api/single-movie?id="+id;
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

export default getSingleMovie;