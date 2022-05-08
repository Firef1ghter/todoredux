import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodosError, getTodosLoading, getTodoSuccess } from '../../Todo/action'
import { v4 as uuid} from "uuid"
import { useEffect } from 'react'
const TodoInput = () => {

    const [title,setTitle] = useState("")


    const dispatch = useDispatch()

    useEffect(()=>{

        fetch("http://localhost:8080/todos")
        .then((res)=> res.json())
        .then((res) => dispatch(getTodoSuccess(res)))
        .catch((err)=> dispatch(getTodosError()))

    },[])

    const handleAdd =()=>{
        const payload ={
            id: uuid(),
            title,
            status: false
        }

        fetch("http://localhost:8080/todos",{
            method: "POST",
            body :JSON.stringify(payload),
            headers:{
                "Content-type": "application/json"
            }
        }).then(()=>{

            dispatch(getTodosLoading())

            fetch("http://localhost:8080/todos")
            .then((res)=> res.json())
            .then((res) => dispatch(getTodoSuccess(res)))
            .catch((err)=> dispatch(getTodosError()))

        })
        
        setTitle("")
    }


  return (

    <>

  

        <center>

        <h1 style={{fontWeight:"800",fontSize:"30px",color:'black'}}>TODO-LIST</h1>

        <div style={{width:"500px" ,display:"flex",gap:"20px",marginTop:"30px"}}>

        <input className="input is-primary" 
        value={title}
        onChange={(e)=>setTitle(e.target.value)}  
        type="text" 
        placeholder="write todo here" />

        <button className="button is-success is-rounded" onClick={handleAdd}>Add Todo</button>

        </div>


        </center>
    
    </>

  
  
  )
}

export default TodoInput