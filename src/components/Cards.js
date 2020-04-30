import React from "react";
import Card from "./shared/Card";

const Cards = () => {
  return (
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
    </div>
  );
};

export default Cards;
