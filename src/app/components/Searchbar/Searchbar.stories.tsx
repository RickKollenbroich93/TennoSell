import SearchBar from './Searchbar';

export default {
  title: 'Component/SearchBar',
  component: SearchBar,
};

export const Search = (): JSX.Element => (
  <SearchBar
    type="search"
    searchValue=""
    onChange={(event) => console.log(event.target.value)}
  />
);
