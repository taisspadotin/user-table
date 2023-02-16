import React from 'react';
import { render } from '@testing-library/react';
import { Table } from '.';
import { data as tableData } from "../../pages/UserApplication/data";

describe("Table", () => {
    test('Should render the Table', () => {
        render(<Table data={tableData}/>);
    });
})