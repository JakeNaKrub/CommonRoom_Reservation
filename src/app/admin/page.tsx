'use client';

import * as React from 'react';
import { collection } from 'firebase/firestore';
import { useFirestore, useUser } from '@/firebase';
import { useCollection } from '@/firebase/firestore/use-collection';
import type { Reservation } from '@/lib/types';
import { ReservationsPage } from '@/components/reservations/reservations-page';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const firestore = useFirestore();
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  const reservationsRef = React.useMemo(() => {
    if (!firestore) return null;
    return collection(firestore, 'reservations');
  }, [firestore]);

  const { data: reservations, isLoading, error } = useCollection(reservationsRef, {
    listen: true,
  });

  React.useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/admin/login');
    }
  }, [isUserLoading, user, router]);

  if (isUserLoading || isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (!user) {
    return null;
  }

  return <ReservationsPage reservations={reservations as Reservation[]} />;
}
