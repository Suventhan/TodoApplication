import { CheckCircleFilled, CheckCircleOutlined } from '@ant-design/icons';

type TaskHeadingProps = {
    title: string,
    isDone: boolean
}

const TaskHeading = ({ title, isDone }: TaskHeadingProps) => {
    const classNames = `flex-shrink-0 h-5 w-5 ${isDone ? 'text-indigo-700': 'text-gray-700'}`

    return (
        <div style={{ display: 'flex' }}>
            <span className="h-5 flex items-center sm:h-6">
                {isDone ? <CheckCircleFilled className={classNames} /> : <CheckCircleOutlined className={classNames} />}
            </span>
            <span className="ml-2 font-medium">{title}</span>
        </div>
        )
}

export default TaskHeading;