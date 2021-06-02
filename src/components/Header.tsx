import React from 'react';
import { Button } from 'antd';

import Heading from './Heading';
import { HeadingProps } from './Heading';


type HeaderProps = {
    title: HeadingProps,
    buttonTitle: string,
    onClick: any
}

const Header = ({ title, buttonTitle, onClick }: HeaderProps) => {
    return (
        <div className="flex py-5 items-center">
            <div className="w-1/2">
                <Heading {...title} />
            </div>
            <div className="w-1/2 align-middle">
                <p className="float-right">
                    <Button 
                        className="py-2 px-5 rounded tracking-wide text-sm font-medium bg-indigo-700 text-white uppercase hover:bg-indigo-600" 
                        onClick={onClick}
                    >
                        {buttonTitle}
                    </Button>
                </p>
            </div>
      </div>
    )
}

export default Header;