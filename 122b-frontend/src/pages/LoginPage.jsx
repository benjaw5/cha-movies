import {useState, useEffect} from 'react'
import { LoginStyle } from '../styles/Other.style';

function LoginPage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        var checkout = document.getElementById('checkout-button');
        if (checkout != null) {checkout.style.display = 'none';}
    }, [])


    const submitHandler = async e => {
        e.preventDefault();
        
        try {
            
            const response = await fetch('/cha-movies/api/login', {
                method: 'POST',
                body: `email=${email}&password=${password}`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
            
            if (response.status == 200) {
                window.location.href = "/cha-movies/"
            }
            else {
                alert("Login Fail")
            }

        } catch (error) {
            console.log("Error when sending login info: ", error)
        }
    }


    return (
        <LoginStyle>
            <form name="login" onSubmit={submitHandler}>
                Email: <input type="text" name="email" onChange={e => setEmail(e.target.value)}/> 
                <br/>
                
                Password: <input type="password" name="password" onChange={e => setPassword(e.target.value)}/> 
                <br/>
                
                <input type="submit" value="Login" />
            </form>
        </LoginStyle>

    )
}

export default LoginPage;