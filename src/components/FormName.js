import React from "react";

const FormName = ({label,test}) => {
  return (
    <div class="w-full md:w-1/5 px-3 md:mb-0 mt-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold text-xs mb-2">
        {label}
      </label>
      <input
        class="appearance-none block w-full p-1 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
        type="text"
        placeholder={test}
      />
    </div>
  );
};

export default FormName;
