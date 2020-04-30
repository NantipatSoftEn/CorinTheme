import React from "react";

const FormIcon = () => {
  return (
    <div class="w-full md:w-1/5 px-3 md:mb-0 mt-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold text-xs mb-2">
        ค้นหา
      </label>
      <div class="block relative">
        <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
          <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
            <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
          </svg>
        </span>
        <input
          placeholder="Search"
          class="appearance-none block w-full p-1 shadow rounded-lg  border-gray-100  pl-8 pr-6 p-1 w-full bg-gray-100  placeholder-gray-400  focus:bg-white outline-none"
        />
      </div>
    </div>
  );
};

export default FormIcon;
