import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
function App() {
  return (
    <div className="bg-gray-900 font-sans leading-normal tracking-normal mt-12">
      <Header />
      <div class="flex flex-col md:flex-row">
        <Navbar />
        <Content />
      </div>
    </div>
  );
}

export default App;
