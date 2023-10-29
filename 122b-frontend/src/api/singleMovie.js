import { checkResponseLogin } from "./loginRedirect";

async function getSingleMovie(apiLink) {
    try {
        const response = await fetch(apiLink, {
            method: "GET",

        });
        checkResponseLogin(response.status);
        const data = await response.json();
        return data
    }
    catch (error) {
        console.error("Error when fetching top movies from ", apiLink);
    }

}



export default getSingleMovie;