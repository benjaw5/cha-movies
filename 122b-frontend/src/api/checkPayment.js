

async function checkPayment(credit_num, first_name, last_name, expiration_date) {
    try {
        const response = await fetch(`http://localhost:8000/cha-movies/api/payment?credit_num=${credit_num}&first_name=${first_name}&last_name=${last_name}&expiration_date=${expiration_date}`, {
        method: 'GET',
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

export default checkPayment;