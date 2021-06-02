import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import CustomButton from './CustomButton';

describe("when rendered with button name", () => {
    it("should have value", () => {
        render(<CustomButton buttonName="Test Button"/>);

        expect(screen.getByText(/Test Button/)).toBeInTheDocument();
    });
});

describe("when rendered with `buttonClick` prop", () => {
    it("should call the buttonClick", () => {
        const buttonClick = jest.fn();
        render(<CustomButton buttonName="Test Button" buttonClick={buttonClick} />);

        fireEvent.click(screen.getByRole("button"));
        expect(buttonClick).toHaveBeenCalled();
    })
})