import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Meth
@Injectable({
  providedIn: 'root'
})
export class ReservationService {


  private apiUrl ="http://localhost:3000"   // api URL to mockoon
  private reservations: Reservation[] = [];

  constructor(private http: HttpClient){

  }


  // CRUD Operations that we want to provide
  // This is using an array and not like a database.

  // Equivalent of GetAllAsync (Observable makes it async)
  getReservations(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.apiUrl + "/reservations");
  }

  // Equivalent of getting a specific item
  getReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(this.apiUrl + "/reservation/" + id);
  }

  // Equivalent of Post
  addReservation(reservation: Reservation): Observable<void> {
    return this.http.post<void>(this.apiUrl + "/reservation", reservation);

  }

  // Equivalent of Delete
  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + "/reservation/" + id);
  }

  // Equivalent of Put
  updateReservation(id: string, updatedReservation: Reservation): Observable<void> {
    return this.http.put<void>(this.apiUrl + "/reservation/" + id, updatedReservation);
  }

}
