import { CSSProperties } from "react";
import useTodos from "../hooks/useTodos";
import TodoItem from "./TodoItem";

export const TodoList = () => {
    const { todos } = useTodos();

    const containerList: CSSProperties = {
        borderRadius: "10px",
        backgroundColor: "gray",
        width: "80%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        overflowY: "auto"
    }
    
    return (
        <ul style={containerList}>
            { todos.map( todo => <TodoItem key={ todo.id } todo={ todo } /> )}
        </ul>
    )
}