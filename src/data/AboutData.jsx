const url = "https://portfolio-backend-bs6x.onrender.com/about";

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

