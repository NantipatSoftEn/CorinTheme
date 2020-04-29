import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components//Navbar";

const Main = (props) => {
  return (
    <div className="bg-gray-900 font-sans leading-normal tracking-normal mt-12">
      <Header />
      <div class="flex flex-col md:flex-row">
        <Navbar />
        <div class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
          <div class="bg-blue-800 p-2 shadow text-xl text-white">
            <h3 class="pl-2">Analytics</h3>
          </div>
            {props.children}
        </div>
      </div>
    </div>
  );
};

export default Main;
