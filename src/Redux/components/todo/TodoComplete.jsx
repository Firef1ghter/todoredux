// import React from 'react'
// import { useDispatch } from 'react-redux';
// import { COMPLETED_TODOS, UNCOMPLETED_TODOS } from '../../Todo/action';

// const TodoComplete = () => {

//     /////////////////>>>>>>>>.COMPLETED.<<<<<<<<<<<////////////

//     const dispatch = useDispatch()
//     const handleCompleted=()=>{

//         completed_Todos(dispatch,status)
//     }



//     const completed_Todos = (dispatch,status) =>{
            
//     //    status = true ;

//      dispatch({
//         type: COMPLETED_TODOS,
//         payload: status
// })
//   };

//   /////////////////////  UNCOMPLETED ///////////////////

//   const handleUncompleted=()=>{

//         uncompleted_Todos(dispatch,status)
//     }

//     const uncompleted_Todos = (dispatch,status) =>{
            
       

//      dispatch({
//         type: UNCOMPLETED_TODOS,
//         payload: status
// })
//   };



//   return (
//     <div>
//         <button className="button is-dark" onClick={handleCompleted}>Completed</button>
//         <button className="button is-dark" onClick={handleUncompleted}>Uncompleted</button>
//     </div>
//   )
// }

// export default TodoComplete