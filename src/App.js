import { useEffect, useState } from "react";
import "./App.css";
const url = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // <--- this is the hook
    const getPosts = async () => {
      const response = await fetch(url);
      try {
        const posts = await response.json();
        console.log(posts);
        setPosts(posts);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);
  return (
    <div classNameName="App">
      <div className="header">
        <h2>Masterschool Blog</h2>
      </div>

      <div className="row">
        <div className="leftcolumn">
          <div className="card">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div className="fakeimg">Image</div>
            <p>Some text..</p>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="card">
            <h2>About Me</h2>
            <div className="fakeimg">Image</div>
            <p>
              Some text about me in culpa qui officia deserunt mollit anim..
            </p>
          </div>
        </div>
      </div>

      <div className="footer">
        <h2>Footer</h2>
      </div>
    </div>
  );
}

export default App;
