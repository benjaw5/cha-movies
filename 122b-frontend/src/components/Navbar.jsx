import {useState, useEffect} from 'react'


function Navbar() {
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [stars, setStars] = useState("");
    const [year, setYear] = useState("");

    const submitHandler = async e => {
        e.preventDefault();
        
        try {
            
            const response = await fetch('http://localhost:8000/cha-movies/api/search', {
                method: 'POST',
                body: `title=${title}&director=${director}&stars=${stars}&year=${year}`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
            

        } catch (error) {
            console.log("Error when sending search query: ", error)
        }
    }


    return (
        <>
            <form name="search" onSubmit={submitHandler}>
                Title: <input type="text" name="title" onChange={e => setTitle(e.target.value)}/> <br/>
                Director: <input type="text" name="director" onChange={e => setDirector(e.target.value)}/> <br/>
                Stars: <input type="text" name="stars" onChange={e => setStars(e.target.value)}/> <br/>
                Year: <input type="text" name="year" onChange={e => setYear(e.target.value)}/> <br/>
                <input type="submit" value="Search" />
            </form>
        </>

    )
}

export default Navbar;