import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
	const [counter, setCounter] = useState(10);

	const incrementFather = useCallback((value) => {
		setCounter((c) => c + value);
	}, []);

	useEffect(() => {
		//incrementFather();
	}, [incrementFather]);

	return (
		<>
			<h1>useCallback hook: {counter}</h1>
			<hr className='w-75' />

			<ShowIncrement increment={incrementFather} />
		</>
	);
};
