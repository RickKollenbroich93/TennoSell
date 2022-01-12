import styles from './App.module.css';
import { useEffect, useState } from 'react';
import useItem from './hooks/useItem';
import HomeIcon from './components/assets/HomeIcon';
import Button from './components/Button/Button';
import Searchbar from './components/Searchbar/Searchbar';
import Card from './components/Card/Card';
import { Cards } from '../types';

function App(): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>('');
  const [allCards, setAllCards] = useState<Cards[]>();

  // const { items } = useItem(searchValue);
  // console.log(items);

  useEffect(() => {
    getData();
    // return () => {
    //   setAllCards();
    // };
  }, []);

  async function getData() {
    const { items } = useItem(searchValue);
    console.log(items);
  }

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
        {allCards &&
          allCards.map((card) => (
            <Card
              item={card.item}
              // itemImg={card.imageUrl}
              // itemBuy={card.itemBuy}
              // itemSell={card.itemSell}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
