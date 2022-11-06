import React, { useState, useEffect } from "react";
import Game from './components/game'

const App = () => {

  const [pokemon, setPokemon] = useState([]);
  const [mount, setMount] = useState(false);

  const POKEMON_NUMBER = 16;

  const randomNumber = (min, max) => {
    let arr = [];
    for (let i = 0; i < POKEMON_NUMBER; i++) {
      const rand = Math.floor(Math.random() * (max - min) + min)
      if (arr.includes(rand)) i--;
      else arr.push(rand);
    }
    return arr;
  }

  const fetchPokemmon = async () => {
    let pokemons = [];
    const arr = randomNumber(1, 850);
    for (let i = 0; i < POKEMON_NUMBER; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${arr[i]}`;
      console.log(url)
      const response = await fetch(url);
      const pokemon = await response.json();
      const id = pokemon.id;
      const name = pokemon.name;
      const image = pokemon.sprites.front_default;
      let clicked = false;
      pokemons.push({ id, name, image, clicked });
    }
    setPokemon(pokemons);
  }

  const ChangeMount = () => {
    setMount(!mount);
  }

  useEffect(() => {
    fetchPokemmon();
  }, [])

  useEffect(() => {
    console.log(mount);
    // fetchPokemmon();
  }, [mount]);

  return (
    <div>
      < Game data={pokemon} mount={ChangeMount} />
    </div>
  )
};

export default App;
