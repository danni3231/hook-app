import { useRef, useState } from 'react';
import { useForm } from '../Hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
	const { onInputChange, onResetForm, description } = useForm({
		description: '',
	});

	const onFormSubmit = (e) => {
		e.preventDefault();

        if (description.trim() === '' ) return;

        const newTodo= {
            id: new Date().getTime(),
            description,
            done: false,
        }

		onNewTodo(newTodo);
		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				placeholder='¿Que hay que hacer?'
				className='form-control'
				name='description'
				value={description}
				onChange={onInputChange}
			/>
			<button
				type='submit'
				className='btn btn-outline-primary mt-2'
			>
				Agregar
			</button>
		</form>
	);
};
