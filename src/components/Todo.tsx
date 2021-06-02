import React, { useEffect, useState } from 'react';
import TaskView from './TaskView';
import Header from './Header';
import AddTodo from './AddTodo';
import { getTodos, addTodo, deleteTodo, updateTodo } from '../todosApi';
import { ITodo } from '../type';

const Todo = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [visible, setVisible] = useState<boolean>(false);

    const title = {
        first: "to",
        middle: "do",
        last: "app"
      }

    useEffect(() => {
      fetchTodos();
    }, []);

    const fetchTodos = (): void => {
        getTodos()
        .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
        .catch((err: Error) => console.log(err));
    }

    const removeTodo = (_id: string): void => {
        console.log("Values: ", _id);
        deleteTodo(_id).then(({ status, data }) => {
            if (status !== 200) {
                throw new Error("Error to delete todo")
            }
            setTodos(data.todos);
        }).catch(err => console.log(err));
    }

    const updateStatus = (todo: ITodo): void => {
        console.log("Values: ", todo);
        updateTodo(todo).then(({ status, data }) => {
            if (status !== 200) {
                throw new Error("Error to update todo")
            }
            setTodos(data.todos);
        }).catch(err => console.log(err));
    }

    const saveTodo = (todo: ITodo): void => {
        todo.status = false;
        console.log("Values: ", todo);
        addTodo(todo).then(({ status, data }) => {
            if (status !== 201) {
                throw new Error("Error to save todo")
            }
            setTodos(data.todos);
        }).catch(err => console.log(err));
    }

    const onCancel = (): void => {
        setVisible(false);
    }

    return (
        <div className="container xl:w-1/2 md:w-full mx-auto px-4">
            <Header 
                title={title} 
                buttonTitle='Add Todo' 
                onClick={() => setVisible(true)}/>
            <AddTodo 
                visible={visible} 
                saveTodo={saveTodo} 
                onCancel={onCancel}  
            />
            {todos && todos.map((todo, id) => (<TaskView key={id} todo={todo} deleteTodo={removeTodo} updateTodo={updateStatus}  />))}
        </div>
    )
  }

  export default Todo;