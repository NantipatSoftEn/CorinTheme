import React from "react";
import Title from "./shared/Title";
import SelectBox from "./shared/SelectBox";
import FormIcon from "./shared/FormIcon";
import Colume from "./shared/Colume";
import RowsUser from "./shared/RowsUser";
import { columes, data } from "./mock/table";
import Table from "./shared/Table";

const Board = (props) => {
  console.log(`props=`, props);

  return (
    <React.Fragment>
      <Title name="Table" />
      <div className="flex flex-wrap mb-6 mt-3">
        <SelectBox label="Max Row" test={[5, 10, 20]} />
        <SelectBox label="Filter" test={["Active", "Inactive"]} />
        <FormIcon />
      </div>
      <Table columes={columes} data={data} props={props}/>
    </React.Fragment>
  );
};

export default Board;
