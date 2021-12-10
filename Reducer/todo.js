import { combineReducers } from "redux"

const initalState = {
    list: [],
    activeID: null
}

const todoReducer = (state = initalState, action) => {
    switch (action.type){
        case 'ADD_TODO':{
            const newlist = [...state.list]
            newlist.push(action.payload)
            return {
                ...state,
                list:newlist}
        }
        case 'SET_ACTIVE_TODO':{
            const newActiveId = action.payload.id
            return {
                ...state,
                activeId: newActiveId
            }
        }
        case 'DELETE_TODO':{
            const newlist = []
            return{
                ...state,
                list: newlist
            }
        }
        case 'DELETE_ITEM': {
            const newToDos = [...state.list]
            const newActiveId = action.payload.id
            
            for (var i = 0; i < newToDos.length; i++) {
                if (newToDos[i].id === newActiveId) {
                    newToDos.splice(i, 1)
                    break;
                }
            }
            return {
                ...state,
                list: newToDos
            }
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer
