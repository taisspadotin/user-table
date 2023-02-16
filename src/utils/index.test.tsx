import { handleSearchTable } from './helpers';
import { data as tableData } from "../pages/UserApplication/data";


describe("handleSearchTable", () => {
    test('Should filter the value by email', () => {
        const value = handleSearchTable('maria', true, false, tableData);
        expect(value.length).toBe(1);
    });

    test('Should filter the value by group', () => {
        const value = handleSearchTable('ux', false, true, tableData);
        expect(value.length).toBe(2);
    });

    test('Should filter the value by both', () => {
        const value = handleSearchTable('ma', true, true, tableData);
        expect(value.length).toBe(3);
    });
})