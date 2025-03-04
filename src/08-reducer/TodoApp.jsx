import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodo } from '../Hooks';

export const TodoApp = () => {
	const {
		todos,
		todosCount,
		pendingTodoCount,
		onNewTodo,
		onDeleteTodo,
		onToogleTodo,
	} = useTodo();

	console.log();

	return (
		<>
			<h1>
				TodoApp: {todosCount}{' '}
				<small>pendientes: {pendingTodoCount}</small>
			</h1>
			<hr />

			<div className='row w-75'>
				<div className='col-5 w-50'>
					<TodoList
						todos={todos}
						onDeleteTodo={onDeleteTodo}
						onToogleTodo={onToogleTodo}
					/>
				</div>

				<div className='col-5'>
					<h4>Agregar TODO</h4>
					<hr />
					<TodoAdd onNewTodo={onNewTodo} />
				</div>
			</div>
		</>
	);
};
