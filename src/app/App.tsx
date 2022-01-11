import styles from './App.module.css';
import HomeIcon from './components/assets/HomeIcon';
import Button from './components/Button/Button';

function App(): JSX.Element {
  return (
    <div className={styles.appcontainer}>
      <h1>Tenno Sell</h1>
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
    </div>
  );
}

export default App;
