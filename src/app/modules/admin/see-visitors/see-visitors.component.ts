import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-see-visitors',
  templateUrl: './see-visitors.component.html',
  styleUrls: ['./see-visitors.component.css']
})
export class SeeVisitorsComponent implements OnInit {

  constructor(private auth: AuthService) { }
  visitors: any;

  ngOnInit(): void {
    this.auth.seeVisitors().subscribe(data => {
      this.visitors = data;
    }
    )
  }

}
