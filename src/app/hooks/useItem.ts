import type { Cards } from '../../types';
import useFetch from './useFetch';

export default function useItem(name?: string): {
  items: Cards[] | null;
} {
  const result = useFetch<Cards[]>(
    `https://api.magicthegathering.io/v1/cards/?name=${name ? name : ''}`
  );

  return {
    items: result.data,
  };
}
