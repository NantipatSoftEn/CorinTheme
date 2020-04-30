import React from "react";

const Row = ({ img, name, role, date, status, color }) => {
  return (
    <React.Fragment>
      <tr>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div class="flex items-center">
            <div class="flex-shrink-0 w-10 h-10">
              <img class="w-full h-full rounded-full" src={img} alt="" />
            </div>
            <div class="ml-3">
              <p class="text-gray-900 whitespace-no-wrap">{name}</p>
            </div>
          </div>
        </td>

        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">{role}</p>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">{date}</p>
        </td>
        <td class="px-5 py-5 bg-white text-sm">
          <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
            <span
              aria-hidden
              class={"absolute inset-0 opacity-50 rounded-full " + color}
            ></span>
            <span class="relative">{status}</span>
          </span>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default Row;
