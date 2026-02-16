'use client';
import * as React from 'react';
import { collection, query, orderBy } from "firebase/firestore";
import { useCollection, useFirestore } from "@/firebase";
import type { Reservation } from "@/lib/types";
import { ReservationsPage } from '@/components/reservations/reservations-page';

export default function Home() {
  const firestore = useFirestore();

  const reservationsQuery = React.useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, "reservations"), orderBy("date", "desc"));
  }, [firestore]);

  const { data: reservations, isLoading } = useCollection<Reservation>(reservationsQuery, { listen: true });

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <ReservationsPage reservations={reservations || []} />
    </div>
  );
}
