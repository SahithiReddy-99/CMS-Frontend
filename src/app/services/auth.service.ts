import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "http://10.129.245.173:7000/";

  constructor(private http: HttpClient) { }

  registerUser(data: any) {
    return this.http.post(this.apiUrl + "owner", data);

  }

  registerEmployee(data: {}) {
    return this.http.post(this.apiUrl + "employee", data);

  }

  getOwners() {
    return this.http.get(this.apiUrl + "owner");
  }

  login(data: any) {
    return this.http.post(this.apiUrl + "login", data);
  }
}
