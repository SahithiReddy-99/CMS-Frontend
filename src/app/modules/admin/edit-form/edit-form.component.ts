import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private router: Router, private auth: AuthService,
    private http: HttpClient, private user: UserService) {
    console.log(this.user.getEmployeeDetails());


    this.employeeForm = this.user.getEmployeeDetails();

  }

  employeeForm!: FormGroup;
  roleTypes = ['Security', 'Helper', 'Supervisor', 'Admin'];
  // roleId = new FormControl(this.user.employeeDetails.roleId);
  email = new FormControl(this.user.employeeDetails.email, [Validators.email, Validators.required]);
  firstName = new FormControl(this.user.employeeDetails.firstName);
  address = new FormControl(this.user.employeeDetails.address);

  // password = new FormControl(this.user.employeeDetails.password, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]);
  mobileNo = new FormControl(this.user.employeeDetails.mobileNo, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
  // is_admin = new FormControl(this.user.employeeDetails.is_admin, [Validators.required]);
  occupation = new FormControl(this.user.employeeDetails.occupation, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]);

  ngOnInit(): void {

    console.log(this.email);


    this.employeeForm = this.formBuilder.group({
      email: this.email,
      firstName: this.firstName,
      // password: this.password,
      mobileNo: this.mobileNo,
      // roleId: this.roleId,
      address: this.address,
      // is_admin: this.is_admin,
      occupation: this.occupation,


    }
    )

  }

  onSubmit(): void {

    try {
      const apiUrl = "http://10.129.245.173:8989/";
      this.http.put(apiUrl + "Emp/" + this.email.value, this.employeeForm.value).subscribe(data => {
        console.log(data);
        this.router.navigate(['/admin/view/']);
      });
    }
    catch (error) {
      console.log(error);

    }
  }
}
