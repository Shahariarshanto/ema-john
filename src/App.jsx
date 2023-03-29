import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar/>
      <Products/>
    </div>
  );
}

export default App;
