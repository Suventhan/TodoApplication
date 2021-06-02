import React from 'react';
import { render, screen } from "@testing-library/react";
import Heading from './Heading';
import { HeadingProps } from './Heading';

describe("when rendered with title", () => {
    it("should have value", () => {
        const title: HeadingProps = {
            first: 'test',
            middle: 'middle',
            last: 'value'
        }
        render(<Heading {...title}/>);

        expect(screen.getByText(/test/)).toBeInTheDocument();
    });
});