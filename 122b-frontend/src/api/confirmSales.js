

async function confirmSales(sale_id, movie_id) {
    try {
        const response = await fetch(`/cha-movies/api/payment/confirmation`, {
        method: 'POST',
        body: `sale_id=${sale_id}&movie_id=${movie_id}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }})
        const data = await response.json();
    
        return data
    }
    catch (e) {
        console.log("Error when adding item to cart: ", e);
    }
}

export default confirmSales;