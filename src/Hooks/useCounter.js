import { useState } from 'react';

export const useCounter = (initialValue, min, max) => {
	const [counter, setCounter] = useState(initialValue);

	const increment = (value) =>
		(!max || counter > max) && setCounter(counter + 1);
	const decrement = (value) =>
		(!min || counter > min) && setCounter(counter - 1);
	const reset = () => setCounter(initialValue);

	return {
		counter,
		increment,
		decrement,
		reset,
	};
};
