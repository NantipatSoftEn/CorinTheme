import React from "react";

const SelectBox = ({ label, test }) => {
  console.log(`testfuck`, test[0]);
  console.log(`label`, label);
  return (
    <div class="w-full md:w-1/5 px-3 md:mb-0 mt-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold text-xs mb-2">
        {label}
      </label>
      <div class="relative">
        <select
          class="appearance-none block w-full p-1 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
          id="grid-state"
        >
          {test.map((t, index) => (
            <option key={index}>{t}</option>
          ))}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectBox;
