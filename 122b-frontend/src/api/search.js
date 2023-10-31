
async function search(title, director, stars, year) {
    try {
        const response = await fetch(`/cha-movies/api/search?title=${title}&director=${director}&stars=${stars}&year=${year}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
    
        const data = await response.json();
        return data
    } catch (error) {
        console.log("Error when sending search query: ", error)
    }


}

export default search;