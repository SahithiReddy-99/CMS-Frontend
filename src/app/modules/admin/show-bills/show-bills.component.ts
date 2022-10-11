import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

interface Bill {
  type: string;
  description: string;
  billNumber: number;
  isPaid: boolean;
  totalBill: number;
  owner: string;

}

@Component({
  selector: 'app-show-bills',
  templateUrl: './show-bills.component.html',
  styleUrls: ['./show-bills.component.css']
})
export class ShowBillsComponent implements OnInit {

  bills: Bill[] = [];
  admin: boolean = false;
  displayStyle = "none";

  constructor(private auth: AuthService, private user: UserService,
    private router: Router) {
    this.admin = this.user.getloginUser().is_admin;
    // console.log(this.user.getloginUser());

    try {

      if (this.admin) {

        this.auth.showAllBills().subscribe(data => {
          console.log(data);
          this.bills = data;
          console.log(this.bills);
          if (this.bills.length > 0) { this.displayStyle = "none"; }
          else { this.displayStyle = "block"; }
        }
        )
      }
      else {
        let email = this.user.getloginUser().email;
        this.admin = this.user.getloginUser().is_admin;
        let x = { 'email': email };
        this.auth.showBills(x).subscribe(data => {
          console.log(data);
          this.bills = data;
          if (this.bills.length > 0) { this.displayStyle = "none"; }
          else { this.displayStyle = "block"; }

          console.log(this.bills);
        }
        )
      }

    }
    catch (err) { console.log(err); }

  }


  ngOnInit(): void {
  }
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
    if (this.user.getloginUser().role == "user") {
      this.router.navigate(['/admin/myProfile']);
    }
    else if (this.user.getloginUser().role == "admin") {
      this.router.navigate(['/admin/view']);
    }
    else {
      this.router.navigate(['/admin/empView']);
    }

  }

}




