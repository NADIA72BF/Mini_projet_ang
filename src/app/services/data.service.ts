import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getRooms(): Observable<any> {
    return this.http.get(`${this.baseUrl}/rooms`);
  }

  getTeachers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/teachers`);
  }

  getSubjects(): Observable<any> {
    return this.http.get(`${this.baseUrl}/subjects`);
  }

  getClasses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/classes`);
  }

  getSessions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/sessions`);
  }

  getStudents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/students`);
  }
}
