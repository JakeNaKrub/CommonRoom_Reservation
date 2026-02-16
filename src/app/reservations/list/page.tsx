'use client';

import React from 'react'; // Import React
import { collection, query, orderBy } from 'firebase/firestore';
import { useCollection, useFirestore } from '@/firebase';
import type { Reservation } from '@/lib/types';
import { ReservationsList } from '@/components/reservations/reservations-list';

export default function ListPage() {
  const firestore = useFirestore();

  const reservationsQuery = React.useMemo(() => { // Use React.useMemo
    // The firestore instance might be null on initial render, so we guard against that.
    if (!firestore) return null;
    return query(collection(firestore, 'reservations'), orderBy('date', 'desc'));
  }, [firestore]);

  // The useCollection hook handles the case where the query is null.
  const { data: reservations, isLoading, error } = useCollection<Reservation>(reservationsQuery, { listen: true });

  if (isLoading) {
    return <div>Loading reservations...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <ReservationsList reservations={reservations} />;
}
