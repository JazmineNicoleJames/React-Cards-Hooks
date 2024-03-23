import React from "react";
import {v1 as uuid} from "uuid";
import PlayingCard from "./PlayingCard";
import { useAxios } from "./hooks"
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {

  const [cards, fetchData] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");
  
  function formatCard(data) {
    return {
      image: data.cards[0].image,
      id: uuid()
    };
  };

  const addCard = async (formatter) => {
    await fetchData(formatter);
  };


  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard(formatCard)}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards && cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
