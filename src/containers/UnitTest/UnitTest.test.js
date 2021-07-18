import React from 'react';
import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import UnitTest from './UnitTest';

test('Renders Unit Test text', () => {
    render(<UnitTest />);
    const text = screen.getByText("Unit Test");
    expect(text).toBeInTheDocument();
})
