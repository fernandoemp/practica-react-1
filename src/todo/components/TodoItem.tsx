import { Checkbox, Divider } from '@mui/material';
import useTodos from '../hooks/useTodos'
import { TodoItemProps } from '../interfaces/interfaces'
import DeleteIcon from '@mui/icons-material/Delete';
import { CSSProperties } from 'react';

const TodoItem = ( {todo}: TodoItemProps) => {
    const { toggleTodo, deleteTodo } = useTodos();

    const li: CSSProperties = {
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : '',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "50px"
    }

    const deleteIcon: CSSProperties = {
        padding: "0 10px"
    }

    const divider = {
        background: "White"
    }

    const labelStyle = {
        color: 'white',
      };
    return (
        <>
            <li style={li}>
                <div onDoubleClick={() => toggleTodo(todo.id)}>
                    <Checkbox 
                        onClick={() => toggleTodo(todo.id)} 
                        checked={todo.completed}
                        style={labelStyle}/>
                    {todo.desc}
                </div>
                <DeleteIcon style={deleteIcon} onClick={() => deleteTodo(todo.id)}></DeleteIcon>
            </li>
            <Divider style={divider}/>
        </>
    )
}
export default TodoItem