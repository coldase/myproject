import "./App.css";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => (res.data ? setData(res.data) : setData([])))
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={getData}>Click</button>
      {data.map((item) => (
        <p>{item.email}</p>
      ))}
    </div>
  );
};

export default App;
