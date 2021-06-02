import React from 'react';
import { Button, Form, Input } from 'antd';
import { ITodo } from '../type';

type AddTodoProps = {
    visible: boolean,
    saveTodo: (values: ITodo) => void,
    onCancel: () => void
}

const AddTodo = ({ visible, saveTodo, onCancel }: AddTodoProps) => {
    const [form] = Form.useForm();

    const handleFormSubmit = (): void => {
      form.validateFields().then(values => {
          form.resetFields();
          saveTodo(values);
          onCancel();
      })
    }

    return (
      <>
        {visible && (
          <div className="w-full py-2">
          <div className=" px-2 py-2 bg-white shadow-lg sm:rounded-md w-full">
              <Form
                  form={form}
                  layout="vertical"
                  name="form_in_modal"
                  className="p-3 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                  onFinish={handleFormSubmit}
              >
                <Form.Item
                  name="name"
                  label="Task Name"
                  className="block text-sm font-medium text-gray-700"
                  rules={[{ required: true, message: 'Please input the title of task!' }]}
                >
                  <Input 
                    style={{ border:'1px solid #ddd' }} 
                    className="mt-1 mb-5 flex rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                  />
                </Form.Item>
                <Form.Item 
                  className="block text-sm font-medium text-gray-700" 
                  name="description" 
                  label="Task Description"
                >
                  <Input 
                    type="textarea" 
                    style={{ border:'1px solid #ddd' }} 
                    className="mt-1 mb-3 p-3 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm "
                  />
                </Form.Item>
                <Form.Item 
                  className='flex justify-end w-auto mx-2'
                >
                  <Button 
                    className="w-auto mx-2 py-2 px-5 rounded tracking-wide text-sm font-medium border-indigo-700 border-2 text-indigo-700 uppercase hover:bg-indigo-600 hover:text-white" 
                    onClick={onCancel}
                  >
                      Cancel
                  </Button>
                  <Button 
                    className="py-2 px-5 rounded tracking-wide text-sm font-medium bg-indigo-700 border-indigo-700 text-white border-2 uppercase hover:bg-indigo-600" 
                    htmlType="submit"
                  >
                      Submit
                  </Button>
                </Form.Item>
              </Form>
          </div>
          </div>
        )}
      </>
    );
};

export default AddTodo;