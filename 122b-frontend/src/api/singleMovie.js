

async function getSingleMovie(id) {
    let apiLink = "http://localhost:8080/cs122b_fall22_project1_star_example_war/api/single-movie?id="+id;
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