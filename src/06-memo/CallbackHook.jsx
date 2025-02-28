import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
	const [counter, setCounter] = useState(0);

	const incrementFather = useCallback(() => {
		setCounter((counter) => counter + 1);
	}, []);

	return (
		<>
			<h1>useCallback hook: {counter}</h1>
			<hr className='w-75' />

			<ShowIncrement increment={incrementFather} />
		</>
	);
};
