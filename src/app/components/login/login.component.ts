import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  loginForm!: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]);

  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService, private user: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
  }

  onSubmit(): void {
    console.log(this.loginForm.value);

    try {
      this.auth.login(this.loginForm.value).subscribe(res => {
        // this.auth.getOwners

        let data = JSON.stringify(res);
        let obj = JSON.parse(data);
        console.log(obj);

        this.user.setloginUser(obj);
        this.user.setIsAuthenticated(true);
        console.log(obj.is_admin);
        this.auth.isLoggedIn = true;

        if (obj.is_admin == true) {
          this.router.navigate(['/admin/view']);
        }
        else if (obj.is_admin == false && obj.role == "User") {
          this.router.navigate(['/admin/myProfile']);

        }
        else {
          this.router.navigate(['/admin/empView']);
        }

      }
      );
    }
    catch (error) {
      console.log(error);

    }
  }

}


