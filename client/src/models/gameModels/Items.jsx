import React from 'react';
import styles from '../../styles/game.css';
import { version } from '../../../../Riot/config.js';

function itemDisplay(items) {
  return items.map((item, i) => (
    <img height="30" width="30" key={`item${i}`} src={item ? `http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item}.png` : './images/items/0000.png'} alt={`item${i}`} />
  ));
}


const Items = (props) => {
  const { stats } = props;
  return (
    <span className={styles.items}>
      {itemDisplay([stats.item0, stats.item1, stats.item2, stats.item3, stats.item4, stats.item5, stats.item6])}
    </span>
  );
};

export default Items;
