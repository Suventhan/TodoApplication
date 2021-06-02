import React from 'react';

export interface HeadingProps {
    first: string,
    middle: string,
    last: string
}

const Heading = ({ first, middle, last }: HeadingProps) => {
    return (
        <p className="font-black text-indigo-700 uppercase text-2xl"> 
          {first}<span className="text-gray-400">{middle}</span> {` ${last}`}
        </p>
    )
}

export default Heading;