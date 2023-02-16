import { render, screen } from '@testing-library/react';
import UserApplication from '.';

describe("UserApplication", () => {
    test('Should render the UserApplication', () => {
        render(<UserApplication/>);
    });

    test('Should return the most and the least studied', () => {
        render(<UserApplication/>);
        expect(screen.getByTestId("user-most-studied").innerHTML).toBe("<b>Most studied:</b> Maria Silva - 7000 hours");
        expect(screen.getByTestId("user-least-studied").innerHTML).toBe("<b>Least studied:</b> Joanna Cecilia - 100 hours");
    });

})