import type { Card } from '../../types';
import useFetch from './useFetch';

export default function useItem(): {
  items: Card[] | null;
  errorMessage: string | null;
  isLoading: boolean;
} {
  const result = useFetch<Card[]>('https://api.magicthegathering.io/v1/cards');

  return {
    items: result.data,
    errorMessage: result.errorMessage,
    isLoading: result.isLoading,
  };
}
