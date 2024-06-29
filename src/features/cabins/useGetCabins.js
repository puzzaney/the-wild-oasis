import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabin';

export function useGetCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });

  return { isLoading, cabins, error };
}
