import {useState, useEffect} from 'react'
import { NavbarStyle } from '../styles/Site.style';


function Navbar() {
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [stars, setStars] = useState("");
    const [year, setYear] = useState("");


    const submitHandler = async e => {
        e.preventDefault();
        window.location.href = `/cha-movies/search?title=${title}&director=${director}&stars=${stars}&year=${year}`;
    }


    return (
            <form name="search" onSubmit={submitHandler}>
                <div><input type="text" placeholder = "Title" name="title" onChange={e => setTitle(e.target.value)}/></div> 
                <div><input type="text" placeholder = "Director" name="director" onChange={e => setDirector(e.target.value)}/> </div>
                <div><input type="text" placeholder = "Stars" name="stars" onChange={e => setStars(e.target.value)}/></div>
                <div><input type="text" placeholder = "Year" name="year" onChange={e => setYear(e.target.value)}/></div>
                <input type="submit" value="Search" />
            </form>

    )
}

export default Navbar;