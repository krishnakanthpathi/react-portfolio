const url = "https://portfolio-backend-bs6x.onrender.com/achievements";

const getData = async () => {
  const response =  await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  return data;
}

(async () => {
  const data = await getData();
  console.log(data);
})();

export default data;

