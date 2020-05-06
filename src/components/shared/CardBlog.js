import React from "react";
import Amp from "../../asset/img/amp.jpg";
import Yuno from "../../asset/img/yuno.jpg";

const CardBlog = () => {
  const mock = "https://tailwindcss.com/img/card-left.jpg";
  const mockpf = "https://tailwindcss.com/img/jonathan.jpg";
  return (
    <div className="mx-20 my-20">
      <div class="max-w-sm w-full lg:max-w-full lg:flex">
        <div
          class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center"
          style={{ "background-image": `url(${Amp})` }}
          title="Woman holding a mug"></div>
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <p class="text-sm text-gray-600 flex items-center">
            🔒
              Private
            </p>
            <div class="text-gray-900 font-bold text-xl mb-2">การเอาตัวรอดในยุคกันดาร</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
              eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
              eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
              eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
   

            </p>
          </div>
          <div class="flex items-center">
            <img class="w-10 h-10 rounded-full mr-4" src={mockpf} alt="Avatar of Jonathan Reinink" />
            <div class="text-sm">
              <p class="text-gray-900 leading-none">Army</p>
              <p class="text-gray-600">วันที่ 6 เดือนพฤษภาคม 2563</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default CardBlog;
