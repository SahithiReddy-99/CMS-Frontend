import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../modules/admin/reviews';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // apiUrl = "http://10.129.245.173:8989/";

  apiUrl="http://127.0.0.1:8000/";
  isLoggedIn = false;

  constructor(private http: HttpClient) { }

  isAuthenticated() {
    return this.isLoggedIn;
  }

  registerUser(data: any) {
    return this.http.post(this.apiUrl + "register", data);

  }

  registerEmployee(data: {}) {
    return this.http.post(this.apiUrl + "register", data);

  }
  getOwnerDetails(data: any) {
    return this.http.get(this.apiUrl + "owner", data);
  }

  getOwners() {
    return this.http.get(this.apiUrl + "owner");
  }

  login(data: any) {
    return this.http.post(this.apiUrl + "login", data);
  }

  getreviews(): Observable<any> {
    return this.http.get(this.apiUrl + "reviews");

  }
  updateProfile(data: {}) {
    return this.http.post(this.apiUrl + "updateUser", data);
  }

  addReview(data: {}) {
    return this.http.post(this.apiUrl + "addReview", data);

  }

  showBills(data: {}): Observable<any> {
    return this.http.post(this.apiUrl + "showbills", data);

  }

  showAllEmployees(): Observable<any> { return this.http.get(this.apiUrl + "showEmployees"); }
  showAllBills(): Observable<any> { return this.http.get(this.apiUrl + "showAllBills"); }
}
