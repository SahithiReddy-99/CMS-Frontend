import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  owner:any;
  
  constructor(private router: Router, private user: UserService) {
    this.owner = this.user.getloginUser();

  }

  ngOnInit(): void {
  }

  updateProfile() {
    this.router.navigate(['admin/updateprofile']);
  }
  addReview() {
    this.router.navigate(['admin/addreview']);

  }
  showBills() {
    this.router.navigate(['admin/showbills']);
  }

}
