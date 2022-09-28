import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeSignUpComponent } from './employee-sign-up/employee-sign-up.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faB, faFilm } from '@fortawesome/free-solid-svg-icons';

import { library as legacyLibrary } from '@fortawesome/fontawesome-svg-core';
import { ReviewsComponent } from './reviews/reviews.component';


@NgModule({
  declarations: [
    EmployeeSignUpComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    NgbModule, FontAwesomeModule
  ]
})
export class AdminModule { }
