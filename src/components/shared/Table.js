import React from "react";
import Colume from "./Colume";
import RowsUser from "./RowsUser";

const Table = (columes, data, props) => {
  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              {columes.map((colume) => (
                <Colume name={colume.name} />
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((user, i) => (
              <RowsUser
                key={i}
                index={i}
                user={user}
                editUser={props.dispatchEditUser}
                delUser={props.dispatchDelUser}
                history={props.history}
              />
            ))}
          </tbody>
        </table>
        <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
          <span className="text-xs xs:text-sm text-gray-900">Showing 1 to 4 of 50 Entries</span>
          <div className="inline-flex mt-2 xs:mt-0">
            <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
              Prev
            </button>
            <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
