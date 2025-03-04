const initialState = [
	{
		id: 1,
		todo: 'something',
		done: false,
	},
];

const todoReducer = (state = initialState, action = {}) => {

    const {type, payload} = action;

    switch (type) {
        case 'ADD_TODO':
            return [...state, payload]
    
        default:
            return state;
    }
   
};

let todos = todoReducer();

console.log(todos);

const newTodo = {
	id: 2,
	todo: 'new todo',
	done: false,
};

const addTodoAction = {
	type: 'ADD_TODO',
	payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
