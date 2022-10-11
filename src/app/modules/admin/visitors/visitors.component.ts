import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.css']
})
export class VisitorsComponent implements OnInit {

  visitorForm!: FormGroup;
  mobileNo = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
  name = new FormControl('', [Validators.required]);
  reason = new FormControl('', [Validators.required]);
  flatId = new FormControl('', [Validators.required]);
  constructor(private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.visitorForm = this.formBuilder.group({
      name: this.name,
      mobileNo: this.mobileNo,
      flatId: this.flatId,
      reason: this.reason

    })
  }

  onSubmit() {
    console.log(this.visitorForm.value);
    try {
      this.auth.addVisitors(this.visitorForm.value).subscribe(data => {
        window.alert(data.Success);
        this.router.navigate(['/admin/empView']);

      }
      )

    }
    catch (err) { console.log(err); }

  }

}
