import React from "react";
import "./App.css";
import Photos from "./components/Photos"

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <h1>NASA by Nick</h1>
      <h3>Photo of the Day</h3>
      <Photos/>
    </div>
  );
}

export default App;
