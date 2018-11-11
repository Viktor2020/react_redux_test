export const addTodo = (text, fontSize) => {

    return {
        type: 'ADD_TODO',
        id: Date.now(),
        text,
        fontSize
    };
};

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};

export const deleteTodo = id => {
    return {
        type: 'DELETE_TODO',
        id
    };
};

export const setFilter = filter => {
    return {
        type: 'SET_FILTER',
        filter
    };
};