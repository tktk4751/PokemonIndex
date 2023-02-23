import React from "react";
import "./card.css";

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div class="card__content">
        <div className="cardImg">
          <img src={pokemon.sprites.front_default} />
        </div>
        <h3 className="cardName">{pokemon.name}</h3>
        <div className="cardTypes">
          <div>Type</div>
          {pokemon.types.map((type) => {
            return (
              <div key={type.type.name}>
                <span className="typeName">{type.type.name}</span>
              </div>
            );
          })}
        </div>
        <div className="cadInfo">
          <div className="cardData">
            <p className="title">Weight : {pokemon.weight}</p>
          </div>
          <div className="cardData">
            <p className="title">Height : {pokemon.height}</p>
          </div>
          <div className="cardData">
            <p className="title">
              Ability : {pokemon.abilities[0].ability.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
