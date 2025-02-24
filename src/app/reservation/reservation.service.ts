import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';


// Meth
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = [];

  // CRUD Operations that we want to provide
  // This is using an array and not like a database.

  // Equivalent of GetAll
  getReservations(): Reservation[]{
    return this.reservations;
  }

  // Equivalent of getting a specific item
  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id);
  }

  // Equivalent of Post
  addResevation(reservation: Reservation): void {
    this.reservations.push(reservation);
  }

  // Equivalent of Delete
  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index, 1)
  }

  // Equivalent of Put
  updateReservation(updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === updatedReservation.id)
    this.reservations[index] = updatedReservation;
  }

}
