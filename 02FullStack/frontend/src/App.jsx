import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Jokes</h1>
      <h1>{jokes.length}</h1>
      <ul>
        {jokes.map((joke) => (
          <li key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.joke}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
