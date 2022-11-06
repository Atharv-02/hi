import React, { useState } from 'react';
import games from './data';
import './style.css';
const allCategories = ['all', ...new Set(games.map((game) => game.category))];
console.log(allCategories);
const Items = () => {
  const [gamesList, setGamesList] = useState(games);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === 'all') {
      setGamesList(games);
    } else {
      console.log(category);
      const newItems = games.filter((game) => {
        console.log(game.category);
        return game.category === category;
      });
      console.log(newItems);
      setGamesList(newItems);
    }
  };
  return (
    <>
      <section className='buy-page'>
        <div className='items-btn-container'>
          <button className='btn btn-menu' onClick={() => filterItems('all')}>
            All
          </button>
          <button
            className='btn btn-menu'
            onClick={() => filterItems('E-Sports')}
          >
            E Sports
          </button>
          <button
            className='btn btn-menu'
            onClick={() => filterItems('Racing')}
          >
            Racing
          </button>
        </div>
        <div className='games-list'>
          {gamesList.map((game) => {
            const { id, img, name, price, description } = game;
            return (
              <div className='game' key={id}>
                <div className='game-img'>
                  <img src={img} alt='' />
                </div>
                <div className='game-text'>
                  <h3>{name}</h3>
                  <p>{price} ETH</p>
                  <p>{description}</p>
                  <button className='btn game-btn'>BUY NOW</button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Items;
