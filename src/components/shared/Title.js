import React from "react";

const Title = ({ name }) => {
  return (
    <div class="bg-blue-800 p-2 shadow text-xl text-white">
      <h3 class="pl-2">{name}</h3>
    </div>
  );
};

export default Title;
