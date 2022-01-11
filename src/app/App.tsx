import styles from './App.module.css';
import { useState } from 'react';
import HomeIcon from './components/assets/HomeIcon';
import Button from './components/Button/Button';
import Searchbar from './components/Searchbar/Searchbar';
import Card from './components/Card/Card';

function App(): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>('');
  const mockCard = [
    {
      item: 'Mirage',
      itemImg: 'URL',
      itemSell: 2,
      itemBuy: 12,
    },
    {
      item: 'Mirage',
      itemImg: 'URL',
      itemSell: 2,
      itemBuy: 12,
    },
    {
      item: 'Mirage',
      itemImg: 'URL',
      itemSell: 2,
      itemBuy: 12,
    },
  ];
  return (
    <div className={styles.appcontainer}>
      <h1>Tenno Sell</h1>
      <Searchbar
        type="search"
        searchValue={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <nav className={styles.navcontainer}>
        <div className={styles.buttoncontainer}>
          <Button>Prime Parts</Button>
        </div>
        <div className={styles.buttoncontainer}>
          <Button>
            <HomeIcon />
          </Button>
        </div>
        <div className={styles.buttoncontainer}>
          <Button>Mods</Button>
        </div>
      </nav>
      <h2>Top Items</h2>
      <div className={styles.cardcontainer}>
        {mockCard.map((card) => (
          <Card
            item={card.item}
            itemImg={card.itemImg}
            itemBuy={card.itemBuy}
            itemSell={card.itemSell}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
