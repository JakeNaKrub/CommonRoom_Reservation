'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/firebase/provider';

export default function LoadingPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading) {
      if (user) {
        router.replace('/admin');
      } else {
        router.replace('/admin/login');
      }
    }
  }, [isUserLoading, user, router]);

  return <div className="flex items-center justify-center h-screen">Loading...</div>;
}
