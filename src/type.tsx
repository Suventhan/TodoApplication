
export interface ITodo {
    _id: string,
    name: string,
    description: string,
    status: boolean
}

export interface TodoProps {
    todo: ITodo
}

export type ApiDataType = {
    message: string,
    status: string,
    todos: ITodo[],
    todo?: ITodo
}