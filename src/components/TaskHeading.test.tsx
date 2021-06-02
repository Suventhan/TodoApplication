import React from 'react';
import { render, screen } from "@testing-library/react";
import TaskHeading from './TaskHeading';

describe("when rendered with title", () => {
    it("should have value", () => {
        render(<TaskHeading title="Test Task Title" isDone={false}/>);

        expect(screen.getByText(/Test Task Title/)).toBeInTheDocument();
    });
});