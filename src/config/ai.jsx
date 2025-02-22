import { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const key = "AIzaSyD94umwvC8v8-FkEwV_K_F1W6irtzWyAVs";
const genAI = new GoogleGenerativeAI(key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default function Ai() {
  const [iframeContent, setIframeContent] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchHtml() {
      const prompt = `
        Generate a unique and creative front-end web application idea using only HTML, CSS, and JavaScript.  
        The project should:  
        - Be interactive and visually appealing.  
        - Have a **clean, minimalistic, and modern** UI.  
        - Use **animations and dynamic elements create any type of projects ** for a smooth user experience.  
        - Be a **fun or useful tool**, such as a productivity app, an interactive game, or a unique visual experience.   
        - Use **only raw HTML, CSS, and JavaScript** (no frameworks or libraries).  
        - Output only the **code** without any explanations.  
      `;

      try {
        const result = await model.generateContent(prompt);
        let text = await result.response.text();

        // Extract sections based on triple backticks
        const htmlMatch = text.match(/```html\n([\s\S]*?)\n```/);
        const cssMatch = text.match(/```css\n([\s\S]*?)\n```/);
        const jsMatch = text.match(/```js\n([\s\S]*?)\n```/);

        const fullContent = `
          <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>${cssMatch ? cssMatch[1] : ""}</style>
          </head>
          <body>
            ${htmlMatch ? htmlMatch[1] : ""}
            <script>${jsMatch ? jsMatch[1] : ""}<\/script>
          </body>
          </html>
        `;
        setLoading(false);
        setIframeContent(fullContent);
      } catch (error) {
        console.error("Error generating content:", error);
      }
    }

    fetchHtml();
  }, []);
  const spinner = "spinner-border display-center text-warning " + (loading ? "" : "d-none");

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className={spinner} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <iframe
        title="Generated Content"
        srcDoc={iframeContent}
        style={{ width: "100%", height: "500px", border: "1px solid #ccc" }}
      />
    </div>
  );
}
