import styles from './App.module.css';

function App(): JSX.Element {
  return (
    <div className={styles.appcontainer}>
      <div className={styles.img}>
        {/* <img src="src/app/components/assets/Background.svg" /> */}
      </div>
      <h1>Tenno Sell</h1>
    </div>
  );
}

export default App;
