import { COMPLETED_TODOS, DELETE_TODOS, GET_TODOS_ERROR, GET_TODOS_LOADING, GET_TODOS_SUCCESS, UNCOMPLETED_TODOS } from "./action"



const initState = {
    laoding: false,
    error: false,
    todos: [],
}

export const todoReducer =(state = initState,action)=>{
    
    switch(action.type){

        case GET_TODOS_LOADING:
        return {
           ...state,
           loading: true,
           error: false,
           todos: []
        } ;

        case GET_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                todos: action.payload
            } ;

        case GET_TODOS_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                todos: []
            } ;

        case DELETE_TODOS :{

            return {
                ...state,
                todos: state.todos.filter(el =>el.id == action.payload),
                }
            }

        case COMPLETED_TODOS :{

            return {
                ...state,
                todos: state.todos.filter(el =>el.status !== action.payload)
                   
                }
            } 

        case UNCOMPLETED_TODOS :{

            return {
                ...state,
                todos: state.todos.filter(el =>el.status !== action.payload)
                   
                }
            } 

        default:
            return state

    }
}