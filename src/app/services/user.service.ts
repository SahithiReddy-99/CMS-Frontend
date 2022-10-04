import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  isAuthenticated: boolean = false;
  loginUser: any;

  // loginUser!: {
  //   email: string;
  //   firstName: string;
  //   lastName: string;
  //   mobileNo: string;
  //   address: string;
  //   occupation: string;
  //   isAdmin: boolean;
  // };

  setloginUser(user: any) {
    this.loginUser = user;
  }
  getloginUser() { return this.loginUser; }
  setIsAuthenticated(isAuthenticated: boolean) { this.isAuthenticated = isAuthenticated; }
  getIsAuthenticated() { return this.isAuthenticated; }


}
