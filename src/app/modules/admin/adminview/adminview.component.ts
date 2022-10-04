import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  addEmployee() { this.router.navigate(['admin/emp']); }
  showEmployees() { this.router.navigate(['admin/showemployees']); }
  showBills() { this.router.navigate(['admin/showbills']); }

}
