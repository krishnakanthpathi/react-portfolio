const url = "http://localhost:8080/about";

const getData = async () => {
    const response = await fetch(url , {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
}

const data = await getData();
export default data.pop();