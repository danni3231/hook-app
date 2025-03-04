export const todoReducer = (initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case '[TODO] Add Todo':
			return [...initialState, payload];

		case '[TODO] Delete Todo':
			return initialState.filter((todo) => todo.id !== payload);

		case '[TODO] Toggle Todo':
			return initialState.map((todo) =>
				todo.id === payload ? { ...todo, done: !todo.done } : todo
			);

		default:
			return initialState;
	}
};
