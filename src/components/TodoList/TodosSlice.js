// const initState = [
//     {
//         id: 1,
//         name: "Learning",
//         completed: false,
//         priority: "Medium",
//     },
//     {
//         id: 2,
//         name: "Game",
//         completed: false,
//         priority: "Low",
//     },
//     {
//         id: 3,
//         name: "Sleep",
//         completed: true,
//         priority: "High",
//     },
//     {
//         id: 4,
//         name: "Eat",
//         completed: false,
//         priority: "High",
//     },
// ];

// const todosReducer = (state = initState, action) => {
//     switch (action.type) {
//         case "todoList/addTodo":
//             return [...state, action.payload];
//         case "todoList/toggleTodoStatus":
//             return state.map((todo) =>
//                 todo.id === action.payload
//                     ? { ...todo, completed: !todo.completed }
//                     : todo
//             );

//         default:
//             return state;
//     }
// };

// export default todosReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: "todoList",
    initialState: [
        {
            id: 1,
            name: "Learning",
            completed: false,
            priority: "Medium",
        },
        {
            id: 2,
            name: "Game",
            completed: false,
            priority: "Low",
        },
        {
            id: 3,
            name: "Sleep",
            completed: true,
            priority: "High",
        },
        {
            id: 4,
            name: "Eat",
            completed: false,
            priority: "High",
        },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(
                (todo) => todo.id === action.payload
            );

            if (currentTodo) currentTodo.completed = !currentTodo.completed;
        },
    },
});
