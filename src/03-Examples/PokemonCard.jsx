import { useLayoutEffect, useRef, useState } from 'react';

export const PokemonCard = ({id, name, sprites = []}) => {
	
    const h2Ref = useRef()
    const [boxSize, setBoxSize] = useState({width: 0, height: 0})

    useLayoutEffect(() => {
      const {width, height} = h2Ref.current.getBoundingClientRect();

      setBoxSize({width, height});
    }, [name])

    return (
		<section className='card text-center' style={ {height: 200} }>
			<h2 ref={h2Ref} className='card-body' >#{id}: {name}</h2>

			<div className='card-body'>
                {
                    sprites.map(sprite => (
                        <img key={sprite} src={sprite} alt={name} />
                    ))
                }
            </div>

            <pre>{JSON.stringify(boxSize)}</pre>
		</section>
	);
};
