import { Component, OnInit } from '@angular/core';
import { Review } from '../reviews';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Review[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
