export const PokemonCard = ({id, name, sprites = []}) => {
	return (
		<section className='card text-center w-50' style={ {height: 200} }>
			<h2 className='card-body' >#{id}: {name}</h2>

			<div className='card-body'>
                {
                    sprites.map(sprite => (
                        <img key={sprite} src={sprite} alt={name} />
                    ))
                }

            </div>
		</section>
	);
};
