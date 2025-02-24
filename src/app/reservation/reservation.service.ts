import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';


// Meth
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = [];

  constructor(){
    let savedReservations = localStorage.getItem("reservations");
    this.reservations = savedReservations? JSON.parse(savedReservations) : [];
  }

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
  addReservation(reservation: Reservation): void {
    reservation.id = Date.now.toString();

    this.reservations.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  // Equivalent of Delete
  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index, 1)
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  // Equivalent of Put
  updateReservation(id: string, updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === id)
    this.reservations[index] = updatedReservation;
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

}
