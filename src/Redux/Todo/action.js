import axios from 'axios';



export const GET_TODOS_LOADING = "GET_TODOS_LOADING"
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS"
export const GET_TODOS_ERROR = "GET_TODOS_ERROR"
export const DELETE_TODOS = "DELETE_TODOS"
export const COMPLETED_TODOS = "COMPLETED_TODOS"
export const UNCOMPLETED_TODOS = "COMPLETED_TODOS"


export const getTodosLoading =() =>({
    type : GET_TODOS_LOADING
});

export const getTodoSuccess =(payload) =>({
    type : GET_TODOS_SUCCESS,
    payload
});

export const getTodosError =() =>({
    type : GET_TODOS_ERROR
});

export const deleteTodos = async (dispatch,id) =>{

    try{

            let r = await axios.delete(`http://localhost:8080/todos/${id}`);      
    }
    catch(e){
            console.log(e)
    }
    dispatch({
            type: DELETE_TODOS,
            payload: id
    })
};




