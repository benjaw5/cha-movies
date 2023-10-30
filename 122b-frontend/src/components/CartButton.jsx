
function CartButton({title, action, displayName, onClick = null}) {

    const buttonClick = async e => {
        try {
            const response = await fetch(`http://localhost:8000/cha-movies/api/cart`, {
            method: 'POST',
            body: `item=${title}&action=${action}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })

            if (response.status == 200) {
                alert("Action successful! ", action)
            }
            else {
                alert("action failed! ", action)
            }
        }
        catch (e) {
            console.log("Error when adding item to cart: ", error);
            alert("Successful ", action)
        }
    }

    return (
        <button onClick={() => {
            buttonClick()
            if (onClick) {onClick()}
            }}>{displayName}</button>
    )
    
}

export default CartButton