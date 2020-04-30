import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateForm = ({ label }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div class="w-full md:w-1/5 px-3 md:mb-0 mt-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold text-xs mb-2">
        {label}
      </label>
      <DatePicker
        showPopperArrow={false}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="appearance-none block w-full p-1 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
      />
    </div>
  );
};

export default DateForm;
