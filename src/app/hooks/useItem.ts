import type { Card } from '../../types';
import useFetch from './useFetch';

export default function useItem(name?: string): {
  items: Card[] | null;
  errorMessage: string | null;
  isLoading: boolean;
} {
  const result = useFetch<Card[]>(
    `https://api.magicthegathering.io/v1/cards/?name=${name ? name : ''}`
  );

  return {
    items: result.data,
    errorMessage: result.errorMessage,
    isLoading: result.isLoading,
  };
}
