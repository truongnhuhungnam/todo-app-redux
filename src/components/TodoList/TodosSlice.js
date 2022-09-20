const initState = [
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
];

const todosReducer = (state = initState, action) => {
    switch (action.type) {
        case "todoList/addTodo":
            return [...state, action.payload];
        case "todoList/toggleTodoStatus":
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );

        default:
            return state;
    }
};

export default todosReducer;
