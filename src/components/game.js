import { useState, useEffect } from "react";

const Game = (props) => {

    const [pokemonData, setPokemonData] = useState([]);

    const shufflePokemon = () => {
        console.log("pokemon is shuffling....")
        let temp = [...pokemonData];
        for (let i = temp.length - 1; i >= 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var t = temp[i];
            temp[i] = temp[j];
            temp[j] = t;
        }
        console.log(temp);
        setPokemonData(temp);
        console.log(pokemonData);
    }

    useEffect(() => {
        setPokemonData(props.data);
    }, [props.data])

    return (
        <div>
            {console.log("rendering")}
            {
                pokemonData.length === 0 ? null :
                    pokemonData.map((curr) => {
                        return (
                            <div onClick={shufflePokemon} key={curr.id} >
                                <img src={curr.image} />
                                <p>{curr.name}</p>
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default Game;