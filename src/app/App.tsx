import styles from './App.module.css';
import { useState } from 'react';
import HomeIcon from './components/assets/HomeIcon';
import Button from './components/Button/Button';
import Searchbar from './components/Searchbar/Searchbar';

function App(): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>('');
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
    </div>
  );
}

export default App;
