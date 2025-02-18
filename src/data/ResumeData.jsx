
const getData = async () => {
    const response = await fetch('https://portfolio-backend-bs6x.onrender.com/resume' , {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    
    })
    const data = await response.json()
    return data ;
}

export default getData().then(data => data.pop());
