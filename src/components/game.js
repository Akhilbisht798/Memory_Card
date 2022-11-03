import { useState, useEffect } from "react";

const Game = (props) => {

    const [pokemon, setPokemon] = useState([]);

    const shufflePokemon = () => {
        let temp = pokemon;
        for (let i = temp.length - 1; i >= 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var t = temp[i];
            temp[i] = temp[j];
            temp[j] = t;
        }
        setPokemon(temp);
        console.log(pokemon);
    }

    useEffect(() => {
        setPokemon(props.data);
    }, [props.data])

    return (
        <div>
            {
                pokemon === 0 ? null :
                    pokemon.map((curr) => {
                        return (
                            <div onClick={shufflePokemon}>
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