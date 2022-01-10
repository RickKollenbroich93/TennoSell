import React from 'react';
import SearchIcon from '../assets/SearchIcon';
import styles from './Searchbar.module.css';

type SearchBarProps = {
  type: 'search' | 'add';
  className?: string;
  searchValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Searchbar({
  searchValue,
  onChange,
  className,
}: SearchBarProps): JSX.Element {
  return (
    <section className={`${styles.container} ${className}`}>
      <input
        type="search"
        placeholder={'Search...'}
        className={styles.searchbarinput}
        value={searchValue}
        onChange={onChange}
      />
      <div className={styles.iconcontainer}>
        <SearchIcon />
      </div>
    </section>
  );
}

export default Searchbar;
