
async function getCartItems() {
    try {
        const response = await fetch(`http://localhost:8000/cha-movies/api/cart`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }})
        const data = await response.json();
    
        return data
    }
    catch (e) {
        console.log("Error when adding item to cart: ", error);
    }
}

export default getCartItems;