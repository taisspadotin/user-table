import React from 'react';
import { render, screen } from '@testing-library/react';
import { Checkbox } from '.';


describe("Checkbox", () => {
    test('Should render the checkbox', () => {
        render(<Checkbox checked={true} onChange={jest.fn()} />);
    });

    test('Should render the checkbox content when is checked', () => {
        render(<Checkbox checked={true} onChange={jest.fn()} />);
        expect(screen.getByTestId("checkbox-checked")).toBeInTheDocument();
    });

    test("Shouldn't render the checkbox content when is checked", () => {
        render(<Checkbox checked={false} onChange={jest.fn()} />);
        expect(screen.queryByTestId("checkbox-checked")).not.toBeInTheDocument();
    });
})