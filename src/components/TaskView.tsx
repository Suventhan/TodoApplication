import React from 'react';
import CustomButton from './CustomButton';
import TaskHeading from './TaskHeading';
import { ITodo } from '../type';

type TaskViewProps = {
    todo: ITodo,
    deleteTodo: (_id: string) => void,
    updateTodo: (todo: ITodo) => void
}

const TaskView = ({ todo, deleteTodo, updateTodo }: TaskViewProps) => {
    return (
        <div className="w-full py-2">
        <div className=" px-2 py-2 bg-white shadow-lg sm:rounded-md">
          <div className="flex items-center">
            <div className="w-8/12">
              <div className="p-3 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <ul className="list-disc">
                  <li className="flex items-start">
                    <TaskHeading 
                      title={todo.name}  
                      isDone={todo.status}
                    />
                  </li>
                </ul>
                <p className="text-sm font-light" style={{ marginTop: 0 }}>{todo.description}</p>
              </div>
            </div>  
            <CustomButton 
              buttonName='remove' 
              buttonClick={() => deleteTodo(todo._id)} 
              className='border-2 text-indigo-700 hover:text-white' 
            />
            <CustomButton 
              buttonName='done' 
              buttonClick={() => updateTodo({ status: true, ...todo })} 
              className='bg-indigo-700 text-white border-2 hover:bg-indigo-600' 
            />
          </div>
        </div>
      </div>
    )
}

export default TaskView;