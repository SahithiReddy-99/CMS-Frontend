import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addVisitor() { this.router.navigate(['admin/AddVisitors']); }
  seeVisitors() { this.router.navigate(['admin/SeeVisitors']); }
  seeFlatsDetails() { }
  addBills() { }

}
