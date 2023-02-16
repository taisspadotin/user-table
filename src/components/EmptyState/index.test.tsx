import React from 'react';
import { render } from '@testing-library/react';
import { EmptyState } from '.';


describe("EmptyState", () => {
    test('Should render the EmptyState', () => {
        render(<EmptyState/>);
    });
})