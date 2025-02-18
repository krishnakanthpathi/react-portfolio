const url = "http://localhost:8080/projects";

const getData = async () => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Convert response to JSON
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const data = await getData()

export default data ;














// export default [
//   {
//     "id": 1,
//     "title": "Blog Post Application",
//     "image": "img/Screenshot 2024-10-24 165927.png",
//     "alt": "Blog Post Application",
//     "description": "A JavaScript-based application that utilizes local storage and APIs to manage blog posts.",
//     "github_link": "https://github.com/krishnakanthpathi/blogit",
//     "website_link": "https://krishnakanthpathi.github.io/blogit/"
//   },
//   {
//     "id": 2,
//     "title": "Webmage College Website Contest",
//     "image": "img/Screenshot 2024-10-24 170252.png",
//     "alt": "Webmage College Website Contest",
//     "description": "Participated in the Webmage contest to develop a responsive and interactive website for my college, showcasing the college's features and events.",
//     "github_link": "https://github.com/krishnakanthpathi/webmage",
//     "website_link": "https://krishnakanthpathi.github.io/webmage/"
//   },
//   {
//     "id": 3,
//     "title": "Stack and Queue Simulation",
//     "image": "img/simulation.png",
//     "alt": "Stack and Queue Simulation",
//     "description": "A simulation tool to visualize stack and queue operations, aiding in understanding data structure concepts.",
//     "github_link": "https://github.com/krishnakanthpathi/stack-queue-simulation",
//     "website_link": "https://krishnakanthpathi.github.io/stack-queue-simulation/"
//   },
//   {
//     "id": 4,
//     "title": "SVLN Weighing Scales",
//     "image": "img/svaln.png",
//     "alt": "SVLN Weighing Scales",
//     "description": "An e-commerce project using a mock API to manage products and simulate a shopping experience for weighing scales.",
//     "github_link": "https://github.com/krishnakanthpathi/svln",
//     "website_link": "https://krishnakanthpathi.github.io/svln/"
//   },
//   {
//     "id": 5,
//     "title": "Graph Traversals",
//     "image": "img/graphproject.png",
//     "alt": "graph Projects",
//     "description": "A project demonstrating graph traversal algorithms including Breadth-First Search (BFS) and Depth-First Search (DFS).",
//     "github_link": "https://github.com/krishnakanthpathi/graph-traversals",
//     "website_link": "https://krishnakanthpathi.github.io/projects/graphtraversals/index.html"
//   }
// ]
