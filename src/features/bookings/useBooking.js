import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getBooking } from '../../services/apiBookings';

export default function useBooking(id) {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ['booking'],
    queryFn: () => getBooking(bookingId),
  });

  return { isLoading, booking, error };
}
