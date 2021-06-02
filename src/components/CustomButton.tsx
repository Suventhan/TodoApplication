import { Button } from 'antd';

type CustomButtonProps = {
    buttonName: string,
    buttonClick: any,
    className: string
}

const CustomButton = ({ buttonName, buttonClick, className }: CustomButtonProps) => {
    return (
        <div style={{ display: 'flex' }} className="w-auto px-1">
            <p>
                <Button 
                    className={`py-2 px-5 rounded tracking-wide text-sm font-medium uppercase hover:bg-indigo-600 border-indigo-700 ${className}`}  
                    onClick={buttonClick}>
                        {buttonName}
                </Button>
            </p>
        </div>
    )
}

export default CustomButton;