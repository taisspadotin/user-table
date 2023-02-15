import React, { useState } from "react";
import { Table } from "../../components/Table";
import { data as tableData } from "./data";

const UserApplication = (): JSX.Element => {
  const [data, setData] = useState(tableData);
  const [searchValue, setSearchValue] = useState("");

  const searchedData = data.filter(
    x => x.email.includes(searchValue) || 
    x.primaryGroup.includes(searchValue)
  );

  const sortedByHoursStudied = [...searchedData].sort((a, b) => b.hoursStudied - a.hoursStudied);

  const mostStudied = sortedByHoursStudied[0];
  const leastStudied = sortedByHoursStudied[sortedByHoursStudied.length - 1];
  //TODO: Fazer empate

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search by email or by a group"
        />
      </div>
        <Table data={searchedData}/>
      <div>
        <span>Most studied: {`${mostStudied?.firstName} ${mostStudied?.lastName} - ${mostStudied?.hoursStudied} hours`}</span>
        <span>Least studied: {`${leastStudied?.firstName} ${leastStudied?.lastName} - ${leastStudied?.hoursStudied} hours`}</span>
      </div>
    </div>
  );
};

export default UserApplication;
