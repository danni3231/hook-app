import React, { useRef } from 'react';

export const FocusScreen = () => {

    const inputRef = useRef()

    const setFocus = () => {
        inputRef.current.select();
    };

	return (
		<>
			<h1>Focus Screen</h1>
			<hr className='w-75'/>
			<input
                ref={inputRef}
				type='text'
				placeholder='Ingrese su nombre'
                className='form-control w-75' // automatically focus the input field when the component mounts
			/>

            <button 
                className="btn btn-primary mt-2"
                onClick={() => setFocus()}
            >
               
                SetFocus
            </button>
		</>
	);
};
