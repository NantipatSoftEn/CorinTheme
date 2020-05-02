import React from "react";

const Row = ({ img, name, role, date, status, color }) => {
  return (
    <React.Fragment>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <img className="w-full h-full rounded-full" src={img} alt="" />
            </div>
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">{name}</p>
            </div>
          </div>
        </td>

        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{role}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{date}</p>
        </td>
        <td className="px-5 py-5 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
            <span aria-hidden className={"absolute inset-0 opacity-50 rounded-full " + color}></span>
            <span className="relative">{status}</span>
          </span>
        </td>
        <td className="px-5 py-5 bg-white text-sm">
          <button className="bg-blue-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            ดูข้อมูล
          </button>{" "}
          <button className="bg-yellow-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            แก้ไข
          </button>{" "}
          <button className="bg-red-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            ลบ
          </button>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default Row;
