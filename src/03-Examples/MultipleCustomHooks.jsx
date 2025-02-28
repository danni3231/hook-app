import { useCounter, useFetch } from '../Hooks';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {
	const { counter, decrement, increment } = useCounter(1, 1);

	const { data, isLoading, hasError, error } = useFetch(
		`https://pokeapi.co/api/v2/pokemon/${counter}`
	);

	//console.log(data);
	return (
		<>
			<h1>Pokedex</h1>
			<h2>Pokemon Info:</h2>
			{isLoading ? (
				<LoadingMessage />
			) : (
				<PokemonCard
					id={counter}
					name={data?.name}
					sprites={[
						data?.sprites.front_default,
						data?.sprites.front_shiny,
						data?.sprites.back_default,
						data?.sprites.back_shiny,
					]}
				/>
			)}

			<section className='d-flex gap-2 mt-2'>
				<button
					className='btn btn-primary me-0'
					onClick={() => decrement()}
				>
					Anterior
				</button>
				<button
					className='btn btn-primary me-0'
					onClick={() => increment()}
				>
					Siguiente
				</button>
			</section>
		</>
	);
};
