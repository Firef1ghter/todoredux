import { useDispatch } from 'react-redux';
import { COMPLETED_TODOS, deleteTodos, DELETE_TODOS, UNCOMPLETED_TODOS } from '../../Todo/action';


import React from 'react'

const TodoItem = ({id,title,status}) => {

    const dispatch = useDispatch() ;


    //////////////////////////// COMPLETED  /////////////////

    const handleCompleted=()=>{

        completed_Todos(dispatch,id,status)
    }

    const completed_Todos = (dispatch,id,status) =>{

     dispatch({
        type: COMPLETED_TODOS,
        payload: id,status
})
};

const handleUncompleted=()=>{

                uncompleted_Todos(dispatch,status)
            }
        
            const uncompleted_Todos = (dispatch,value) =>{
                    
               
        
             dispatch({
                type: UNCOMPLETED_TODOS,
                payload: value
        })
          };
        

    

   /////////////////>>>>>>>>.REMOVE.<<<<<<<<<<<////////////


    const handleRemove =()=>{

            deleteTodos(dispatch,id)  
    }

  return (
    <>

    <div style={{display:"flex",fontWeight:"800",fontSize:"25px",marginLeft:"500px",gap:"130px",marginBottom:"0px"}}>

                <div style={{width:"100px",color:"white",textDecoration: status ? "line-through" : "none"}}>{title}</div>
                
                <div style={{display:"flex",width:"200px",height:"70px",gap:"10px"}}>

                      <button className="button is-dark"  onClick={handleRemove}>Remove</button>
                      <button className="button is-dark" value={true} onClick={handleCompleted}>Completed</button>
                      <button className="button is-dark" value={false} onClick={handleUncompleted}>Not completed</button>
                      
                </div>
              
    </div>
      
    </>
   
  )
}

export default TodoItem