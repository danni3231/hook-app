import { useCounter } from '../Hooks';

export const CounterCustomHook = () => {
	const {counter,decrement,increment,reset} = useCounter(0);

	return (
		<>
			<h1>CounterCustomHook: {counter}</h1>
			<hr />

			<button className='btn btn-primary' onClick={() => decrement(2)}>-1</button>
			<button className='btn btn-primary' onClick={reset}>Reset</button>
			<button className='btn btn-primary' onClick={() =>increment(2)}>+1</button>
		</>
	);
};
