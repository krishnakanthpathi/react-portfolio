
const getData = async () => {
    const response = await fetch('http://localhost:8080/resume' , {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    
    })
    const data = await response.json()
    return data ;
}

const data = await getData()
export default data.pop()