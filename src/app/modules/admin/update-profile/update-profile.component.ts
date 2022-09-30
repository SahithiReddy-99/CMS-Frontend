import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  updateForm!: FormGroup;
  email = new FormControl('', [Validators.email, Validators.required]);
  firstName = new FormControl('');
  lastName = new FormControl('');
  // username = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]);
  mobileNo = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
  occupation = new FormControl('', [Validators.required, Validators.maxLength(30)]);
  roleId = "User";
  address = new FormControl('', [Validators.minLength(5), Validators.maxLength(200)]);
  user_type = "owner";
  image = new FormControl('', [Validators.required]);

  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) { }


  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,

      mobileNo: this.mobileNo,
      occupation: this.occupation,
      address: this.address,
      roleId: this.roleId,
      user_type: this.user_type,
      // add image
      image: this.image
    })



  }

  onSubmit() { }
}
