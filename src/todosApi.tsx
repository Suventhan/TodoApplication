import axios, { AxiosResponse } from 'axios';
import { ApiDataType, ITodo } from './type';

const baseUrl: string = "https://todo-app-suve.herokuapp.com/";

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todos: AxiosResponse<ApiDataType> = await axios.get(baseUrl + "/todos");

        return todos;
    } catch (error) {
        throw new Error(error);

    }
}

export const addTodo = async (values: ITodo): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const saveTodo: AxiosResponse<ApiDataType> = await axios.post(baseUrl + "/todo", values);

        return saveTodo;
    } catch (error) {
        throw new Error(error);
    }
}

export const deleteTodo = async (_id: string): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(`${baseUrl}/todo/${_id}`);

        return deletedTodo;
    } catch (error) {
        throw new Error(error);
    }
}

export const updateTodo = async (values: ITodo): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todo: Pick<ITodo, "status"> = {
            status: true
        }
        const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(`${baseUrl}/todo/${values._id}`, todo);

        return updatedTodo;
    } catch (error) {
        throw new Error(error);
    }
}