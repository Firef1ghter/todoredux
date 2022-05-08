import React from 'react'
import { useSelector } from "react-redux";
import TodoComplete from './TodoComplete';
import TodoInput from "./TodoInput";
import TodoItem from './TodoItem';

export const Todo =()=>{

    const {loading,error,todos} =  useSelector((state)=>state.todos)
    return loading ? 
    (<h1>Loading...</h1>)
    : error? 
    (<h1>Something went wrong.....</h1>)
    : (
        <>

        
        
        <TodoInput/>
        <br></br>

        {/* {todos.map((todo)=>(
            <TodoComplete key={todo.id} {...todo}/>
         
        ))} */}

        {todos.map((todo)=>(
           
            <TodoItem key={todo.id} {...todo} />
        ))}

        </>
    )
}