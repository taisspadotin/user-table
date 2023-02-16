import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '.';


describe("Header", () => {
    test('Should render the Header', () => {
        render(<Header 
            searchValue='' 
            filterByEmail={true} 
            filterByGroup={true} 
            changeFilterByEmail={jest.fn()} 
            changeFilterByGroup={jest.fn()} 
            changeSearchedValue={jest.fn()}/>);
    });

    test("Should disabled the input when hasn't filters", () => {
        render(<Header 
            searchValue='' 
            filterByEmail={false} 
            filterByGroup={false} 
            changeFilterByEmail={jest.fn()} 
            changeFilterByGroup={jest.fn()} 
            changeSearchedValue={jest.fn()}/>);
        expect(screen.getByTestId("header-input")).toBeDisabled();
    });

    test("Shouldn't disabled the input when has filters", () => {
        render(<Header 
            searchValue='' 
            filterByEmail={true} 
            filterByGroup={false} 
            changeFilterByEmail={jest.fn()} 
            changeFilterByGroup={jest.fn()} 
            changeSearchedValue={jest.fn()}/>);
        expect(screen.getByTestId("header-input")).not.toBeDisabled();
    });
})