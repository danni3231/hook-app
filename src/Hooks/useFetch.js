import { useEffect, useState } from 'react';

const localCache = {};

export const useFetch = (url) => {
	const [state, setState] = useState({
		data: null,
		isLoading: true,
		hasError: false,
		error: null,
	});

	useEffect(() => {
		setLoading();
		getFetch();
	}, [url]);

	const setLoading = () => {
		setState({
			data: null,
			isLoading: true,
			hasError: false,
			error: null,
		});
	};

	const getFetch = async () => {

        if(localCache[url]) {
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null,
            });
            return;
        }
        
        setLoading();

		const resp = await fetch(url);

		//sleep
		await new Promise((resolve) => setTimeout(resolve, 1500));

		if (!resp.ok) {
			setState({
				data: null,
				isLoading: false,
				hasError: true,
				error: {
					code: resp.status,
					message: resp.statusText,
				},
			});
			return;
		}

		const data = await resp.json();

		setState({
			data,
			isLoading: false,
			hasError: false,
			error: null,
		});

		//Manejo del cache

        localCache[url] = data;
	};

	return {
		...state,
		state,
	};
};
