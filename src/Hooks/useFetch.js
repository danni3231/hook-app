import { useEffect, useState } from 'react';

export const useFetch = () => {
	const [state, setState] = useState({
		data: null,
		isLoading: true,
		hasError: false,
		error: null,
	});

	useEffect(() => {
		getFetch();
	}, []);

	const getFetch = async (params) => {
		const resp = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
		const data = await resp.json();

        console.log(data);
	};

	return {
		...state,
		state,
	};
};
