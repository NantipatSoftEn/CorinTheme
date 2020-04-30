import React from "react";

const Card = ({title, value, color,icon,iconColor}) => {
  return (
    <div class="w-full md:w-1/2 xl:w-1/3 p-3">
      <div class={"bg-green-100 border-b-4 rounded-lg shadow-lg p-5 " + color}>
        <div class="flex flex-row items-center">
          <div class="flex-shrink pr-4">
            <div class={iconColor}>
              <i class={icon}></i>
            </div>
          </div>
          <div class="flex-1 text-right md:text-center">
            <h5 class="font-bold uppercase text-gray-600">{title}</h5>
            <h3 class="font-bold text-3xl">
              {value}
              <span class="text-green-500">
                <i class="fas fa-caret-up"></i>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
