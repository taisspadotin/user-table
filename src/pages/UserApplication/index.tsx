import React, { useMemo, useState } from "react";
import { EmptyState } from "../../components/EmptyState";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import { data as tableData } from "./data";
import { Container, ContentStudy } from "./styles";

const UserApplication = (): JSX.Element => {
  const [data, setData] = useState(tableData);
  const [searchValue, setSearchValue] = useState("");
  const [filterByEmail, setFilterByEmail] = useState(true);
  const [filterByGroup, setFilterByGroup] = useState(true);

  const searchedData = useMemo(() => {
    if(!searchValue || (!filterByEmail && !filterByGroup)) return data;
    return data.filter(x => ((filterByEmail && x.email.includes(searchValue)) || (filterByGroup && x.primaryGroup.includes(searchValue))))
  }, [data, filterByEmail, filterByGroup, searchValue])

  const sortedByHours = [...searchedData].sort((a, b) => b.hoursStudied - a.hoursStudied);

  const mostStudied = sortedByHours[0];
  const leastStudied = sortedByHours[sortedByHours.length - 1];

  return (
    <Container>
        <Header 
            searchValue={searchValue} 
            filterByEmail={filterByEmail}
            filterByGroup={filterByGroup}
            changeFilterByEmail={setFilterByEmail}
            changeFilterByGroup={setFilterByGroup}
            changeSearchedValue={setSearchValue}/>
        {searchedData.length === 0 ? 
            <EmptyState/> : 
            <>
                <Table data={searchedData}/>
                <ContentStudy>
                    <span><b>Most studied:</b> {`${mostStudied?.firstName} ${mostStudied?.lastName} - ${mostStudied?.hoursStudied} hours`}</span>
                    <span><b>Least studied:</b> {`${leastStudied?.firstName} ${leastStudied?.lastName} - ${leastStudied?.hoursStudied} hours`}</span>
                </ContentStudy>
            </>
        }
    </Container>
  );
};

export default UserApplication;
