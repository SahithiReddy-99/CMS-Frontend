import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

interface Employee {
  email: EmailValidator;
  firstName: string;
  lastName: string;
  occupation: string;
  is_admin: boolean;
  address: string;
  roleId: string;
}



@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css']
})
export class ShowEmployeesComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.showAllEmployees().subscribe(data => this.employees = data
    );
  }

}
