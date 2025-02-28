import { useMemo, useState } from 'react';
import { useCounter } from '../Hooks';


const heavyStuff = (iterationNumber) =>{
    for (let i = 0; i < iterationNumber; i++) {
        console.log('ahi vamos...')
    }

    return `itracciones realizadas: ${iterationNumber}`;
}

export const MemoHook = () => {
	const { counter, increment } = useCounter(4000);
    const [show, setShow] = useState(true);

    const memorizeValue = useMemo(() => heavyStuff(counter), [counter])

	return (
		<>
			<h1>
				Counter <small>{counter}</small>
			</h1>
			<hr className='w-75' />

            <h4>{memorizeValue}</h4>

			<button className='btn btn-primary' onClick={() => increment()}>
				+1
			</button>
            <button className='btn btn-outline-primary mt-2' onClick={() => setShow(!show)}>
				show/hide: {JSON.stringify(show)}
			</button>
		</>
	);
};
