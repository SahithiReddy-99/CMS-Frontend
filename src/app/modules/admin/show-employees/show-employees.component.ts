import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './example.component';
export interface DialogData {
  animal: string;
  name: string;
}

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
  animal!: string;
  name!: string;

  employees: Employee[] = [];

  constructor(private auth: AuthService,
     private http: HttpClient, 
     private router: Router, 
     private user: UserService,
     public dialog: MatDialog) { }

  ngOnInit(): void {
    this.auth.showAllEmployees().subscribe(data => this.employees = data
    );
  }

  deleteEmp(id: any) {
    console.log(id);

    // const data = { "id": id }
    try {
      const apiUrl = "http://10.129.245.173:8989/";
      this.http.delete(apiUrl + "Emp/" + id).subscribe(data => {
        console.log(data);
        window.location.reload();
      }
      );

    }
    catch (error) { console.log(error); }


  }
  editEmp(id: any) {


    const apiUrl = "http://10.129.245.173:8989/";
    this.http.get(apiUrl + "Emp/" + id).subscribe(data => {
      console.log(data);
      this.user.setEmployeeDetails(data);
      this.router.navigate(['/admin/editform']);
    });

    // this.user.setEmployeeDetails(this.employees[id]);

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


}


