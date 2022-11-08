import React, { useState, useEffect, CSSProperties } from "react";
import Game from './components/game'
import { PacmanLoader } from "react-spinners";

const App = () => {

  const [pokemon, setPokemon] = useState([]);
  const [mount, setMount] = useState(false);
  const [loading, setLoading] = useState(() => false);
  const [highScore, setHighScore] = useState(() => 0);

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

  const changeHighScore = (num) => {
    setHighScore(num);
  }

  const override: CSSProperties = {
    position: "fixed",
    left: "40%",
    top: "40%"
  };

  useEffect(() => {
    setLoading(true);
    fetchPokemmon().then(() => setLoading(false));
  }, [])

  useEffect(() => {
    setLoading(true);
    fetchPokemmon().then(() => setLoading(false));
  }, [mount]);

  return (loading) ?
    <PacmanLoader
      color={"#FFFB00"}
      loading={loading}
      size={100}
      cssOverride={override}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    : (
      <div>
        < Game data={pokemon} mount={ChangeMount} highScore={highScore}
          changeHigh={changeHighScore} />
      </div>
    )
};

export default App;
