export const addTodo = (todo) => {
    return{
        type: 'ADD_TODO',
        payload: todo
    }
}

export const setActiveTodo = (todo) =>{
    return{
        type: 'SET_ACTIVE_TODO',
        payload: todo
    }
}

export const deleteTodo = (todo) =>{
    return{
        type: 'DELETE_TODO',
    }
}

export const deleteItem = (todo) =>{
    return{
        type: 'DELETE_ITEM',
        payload: todo
    }
}