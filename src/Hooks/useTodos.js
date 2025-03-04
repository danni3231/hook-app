import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-reducer/todoReducer';

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || {};
};

export const useTodo = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

    const onNewTodo = (todo) => {
		const action = {
			type: '[TODO] Add Todo',
			payload: todo,
		};
		dispatch(action);
	};

    const onDeleteTodo = (id) => {
		const action = {
			type: '[TODO] Delete Todo',
			payload: id,
		};
		dispatch(action);
	};

    const onToogleTodo = (id) => {
		const action = {
			type: '[TODO] Toggle Todo',
			payload: id,
		};
		dispatch(action);
	};

	return {
		todos,

        todosCount: todos.length,
        pendingTodoCount: todos.filter(todo=> !todo.done).length,

        onNewTodo,
        onDeleteTodo,
        onToogleTodo,
        
	};
};
