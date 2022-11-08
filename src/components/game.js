import { useState, useEffect } from "react";

const Game = (props) => {

    const [pokemonData, setPokemonData] = useState([]);
    const [currScore, setcurrScore] = useState(0);

    const shufflePokemon = (e) => {
        let temp = [...pokemonData];
        const index = e.target.dataset.index;
        temp[index].clicked = true;
        for (let i = temp.length - 1; i >= 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var t = temp[i];
            temp[i] = temp[j];
            temp[j] = t;
        }
        setPokemonData(temp);
    }

    const clickChecked = (e) => {
        const index = e.target.dataset.index;
        if (pokemonData[index].clicked) {
            setcurrScore(0);
            if (currScore > props.highScore) props.changeHigh(currScore);
            props.mount();
            return;
        }
        setcurrScore(currScore + 1);
        shufflePokemon(e);

    }

    useEffect(() => {
        setPokemonData(props.data);
    }, [props.data]);

    return (
        <div>
            Score : {currScore} High-Score : {props.highScore}
            {
                pokemonData.length === 0 ? null :
                    pokemonData.map((curr, index) => {
                        return (
                            <div onClick={clickChecked}
                                key={curr.id} data-id={curr.id} data-index={index}
                                data-clicked={curr.clicked} className="pokemon-div">
                                <img src={curr.image}
                                    data-id={curr.id} data-index={index} data-clicked={curr.clicked} />
                                <p>{curr.name}</p>
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default Game;