import { getPokemonList, getPokemonDescription } from '../api/utils';

import Prompt from '../components/Prompt';
import Select from '../components/Select';
import Card from '../components/Card';
import Controls from '../components/Controls';
import '../styles/styles.css';
import { useState, useEffect } from 'react';

async function logData() {
	const list = await getPokemonList();
	// console.log(list[0]);

	const pokemon = await getPokemonDescription();
	// console.log(pokemon);
}

// logData();

export default function App() {
	const [pokemonList, setPokemonList] = useState([]);
	const [currentId, setCurrentId] = useState(null);
	const [pokemonDes, setPokemonDes] = useState('');

	//fetch pokemon list
	useEffect(() => {
		async function getPokemonListData() {
			const data = await getPokemonList();
			setPokemonList(data.slice(0, 150)); //OG 150
			const randomId = Math.floor(Math.random() * data.length) + 1;
			setCurrentId(randomId);
		}
		getPokemonListData();
	}, []);

	//fecth pokemon description data
	useEffect(() => {
		if (!currentId) return; //stop execution until a Pokemon is actually selected
		async function fetchDescription() {
			try {
				const desc = await getPokemonDescription(currentId);
				setPokemonDes(desc);
			} catch (err) {
				console.error('Failed to fetch description');
				setPokemonDes('No pokemon description available');
			}
		}
		fetchDescription();
	}, [currentId]);

	//display options in select component
	const pokemonListOption = pokemonList.map((pokemon, idx) => {
		return (
			<option key={idx} value={idx + 1}>
				{pokemon.name}
			</option>
		);
	});
	// console.log(pokemonList[0].name);

	const handlePrev = () => {
		setCurrentId((prev) => (prev > 1 ? prev - 1 : prev));
	};

	const handleNext = () => {
		setCurrentId((next) => (next < 150 ? next + 1 : next));
	};

	return (
		<div>
			<Select
				value={currentId}
				onChange={(e) => setCurrentId(Number(e.target.value))}
			>
				{pokemonListOption}
			</Select>
			{pokemonList.length > 0 && currentId !== '' && (
				<>
					<Card
						currentId={currentId}
						pokemonDes={pokemonDes}
						pokemon={pokemonList[currentId - 1]}
						onPrev={handlePrev}
						onNext={handleNext}
					/>
				</>
			)}
			{/* <Controls onPrev={handlePrev} onNext={handleNext} /> */}
			{/* <Prompt /> */}
		</div>
	);
}
