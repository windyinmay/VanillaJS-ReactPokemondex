import CardImage from "../CardImage";
import { getPokemonDescription, getPokemonSpriteUrl } from "../../api/utils";
import "../../styles/Card.css";

// import { useState, useEffect } from "react";

function Card({ currentId, pokemon, pokemonDes, onPrev, onNext }) {
  // const [pokemonDes, setPokemonDes] = useState("");

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const pokemonDes = await getPokemonDescription(pokemonCurrentId);
  //       setPokemonDes(pokemonDes);
  //     } catch (err) {
  //       console.error("Failed to fetch description: ", err);
  //     }
  //   }
  //   if (pokemonCurrentId) fetchData();
  // }, [pokemonCurrentId]);
  // console.log(pokemonList[pokemonCurrentId].name);
  if (!pokemon) return <div>Loading...</div>;
  return (
    <div className="pokemon-card-wrapper">
      <button className="control-button prev" onClick={onPrev}>
        ◀
      </button>
      <div className="pokemon-card">
        {/* because initial pokemonList is [] */}
        {/* {pokemonList.length > 0 && currentId !== "" && ( */}
        <>
          <div className="pokemon-image-wrapper">
            <img
              src={getPokemonSpriteUrl(currentId)}
              alt={pokemon?.name}
              className="pokemon-image"
            />
            <span className="pokemon-name">{pokemon?.name}</span>
          </div>
          <p className="pokemon-description">{pokemonDes}</p>
        </>
        {/* )} */}
      </div>
      <button className="control-button next" onClick={onNext}>
        ▶
      </button>
    </div>
  );
}

export default Card;
