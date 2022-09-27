import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordChecker } from 'src/app/CustomValidators/password-checker';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) { }

  hide = true;
  userForm!: FormGroup;
  email = new FormControl('', [Validators.email, Validators.required]);
  firstName = new FormControl('');
  lastName = new FormControl('');
  username = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]);
  password = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]);
  confirm_password = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]);
  mobileNo = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]);

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      password: this.password,
      confirm_password: this.confirm_password,
      mobileNo: this.mobileNo

    }, {
      validator: PasswordChecker('password', 'confirm_password')
    })
  }

  onReset(): void { }

  onSubmit(): void {
    try {
      this.auth.registerUser(this.userForm.value).subscribe(res => {
        console.log(res);
        this.router.navigate(['/login']);
      }
      );
    }
    catch (error) {
      console.log(error);

    }
  }


}
