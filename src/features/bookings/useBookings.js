import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';

export function useBookings() {
  const [searchParams] = useSearchParams();

  // Filter
  const filterValue = searchParams.get('status');
  const sortByValue = searchParams.get('sortBy') || 'startDate-desc';

  const [field, direction] = sortByValue.split('-');

  const sortBy = { field, direction };

  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : {
          field: 'status',
          value: filterValue,
        };

  // Pagination

  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  const {
    data: { data: bookings, count } = {},
    error,
    isLoading,
  } = useQuery({
    queryKey: ['bookings', filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { count, bookings, error, isLoading };
}
