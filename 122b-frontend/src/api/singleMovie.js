

async function getSingleMovie(id) {
    let apiLink = "/cha-movies/api/single-movie?id="+id;
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