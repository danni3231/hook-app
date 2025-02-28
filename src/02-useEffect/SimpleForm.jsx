import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: 'Danni',
		email: 'daniel.rojas@hotmail.com',
	});

	const { username, email } = formState;

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({ ...formState, [name]: value });
	};

	useEffect(() => {
		//console.log('se uso el useEffect');
	}, []);

	useEffect(() => {
		//console.log('Cambio el formulario');
	}, [formState]);

	useEffect(() => {
		//console.log('Cambio el email');
	}, [email]);

	return (
		<>
			<h1>simpleForm</h1>
			<hr />

			<input
				type='text'
				className='form-control'
				placeholder='Username'
				name='username'
				value={username}
				onChange={onInputChange}
			/>

			<input
				type='text'
				className='form-control mt-2'
				placeholder='email'
				name='email'
				value={email}
				onChange={onInputChange}
			/>

			{username === 'Danni' && <Message />}
		</>
	);
};
