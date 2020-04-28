import React from "react";
import Card from "./Card";
import Graph from "./Graph";
const Content = () => {
  return (
    <div class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
      <div class="bg-blue-800 p-2 shadow text-xl text-white">
        <h3 class="pl-2">Analytics</h3>
      </div>

      <div class="flex flex-wrap">
        <Card
          title="Total Revenue"
          value="777"
          color="border-green-600"
          icon="fa fa-wallet fa-2x fa-inverse"
          iconColor="rounded-full p-5 bg-green-600"
        />
        <Card
          title="Total Users"
          value="777"
          color="border-orange-600"
          icon="fas fa-users fa-2x fa-inverse"
          iconColor="rounded-full p-5 bg-orange-600"
        />
        <Card
          title="Total Users"
          value="777"
          color="border-orange-600"
          icon="fas fa-users fa-2x fa-inverse"
          iconColor="rounded-full p-5 bg-orange-600"
        />
        {/* <Graph/> */}
      </div>
    </div>
  );
};

export default Content;
