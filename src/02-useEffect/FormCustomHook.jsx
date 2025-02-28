import { useEffect } from 'react';
import { Message } from './Message';
import { useForm } from '../Hooks';

export const FormCustomHook = () => {
	const { formState, onInputChange, username, email, password, onResetForm } =
		useForm({
			username: '',
			email: '',
			password: '',
		});

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
			<h1>FormCustomHook</h1>
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

			<input
				type='password'
				className='form-control mt-2'
				placeholder='password'
				name='password'
				value={password}
				onChange={onInputChange}
			/>

			<button onClick={onResetForm} className='btn btn-primary mt-2'>
				Borrar
			</button>
		</>
	);
};
