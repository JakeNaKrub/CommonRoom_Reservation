'use client';
import * as React from "react";
import type { Reservation } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { LogOut, PlusCircle } from "lucide-react";
import { ReservationDialog } from "@/components/reservations/reservation-dialog";
import { ReservationsList } from "@/components/reservations/reservations-list";
import { Card, CardContent } from "@/components/ui/card";
import { useUser, useAuth } from "@/firebase";
import { signOut } from "firebase/auth";

interface ReservationsPageProps {
  reservations: Reservation[];
}

export function ReservationsPage({ reservations }: ReservationsPageProps) {
  const { user } = useUser();
  const auth = useAuth();

  const handleLogout = () => {
    if (auth) {
      signOut(auth);
    }
  };

  return (
    <div className="py-4 md:py-10">
      <div>
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold font-headline">
              {user ? "Admin Dashboard" : "Reservations"}
            </h1>
            <p className="text-muted-foreground">
              {user ? "Approve or decline reservations" : "Manage common room bookings"}
            </p>
            {user && (
              <p className="text-sm text-blue-500 font-semibold mt-1">
                You are in Admin Mode
              </p>
            )}
          </div>
          <div>
            {user ? (
              <Button onClick={handleLogout} variant="outline">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            ) : (
              <ReservationDialog>
                <Button className="w-full">
                  <PlusCircle className="mr-2" />
                  Create Reservation
                </Button>
              </ReservationDialog>
            )}
          </div>
        </div>

        <Card>
          <CardContent className="p-0">
            <ReservationsList reservations={reservations} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
