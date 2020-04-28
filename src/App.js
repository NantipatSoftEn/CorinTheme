import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
function App() {
  return (
    <div className="bg-gray-900 font-sans leading-normal tracking-normal mt-12">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
