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
        <div class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
          <div class="bg-blue-800 p-2 shadow text-xl text-white">
            <h3 class="pl-2">Analytics</h3>
          </div>
          <div class="flex flex-wrap">
            {/* <Content /> */}
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">CONTENT HERER</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
