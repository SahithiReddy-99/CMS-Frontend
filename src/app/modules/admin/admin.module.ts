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
import { UserhomeComponent } from './userhome/userhome.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { ShowBillsComponent } from './show-bills/show-bills.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { ShowEmployeesComponent } from './show-employees/show-employees.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { SeeVisitorsComponent } from './see-visitors/see-visitors.component';


@NgModule({
  declarations: [
    EmployeeSignUpComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ReviewsComponent,
    UserhomeComponent,
    UpdateProfileComponent,
    AddReviewComponent,
    ShowBillsComponent,
    AdminviewComponent,
    ShowEmployeesComponent,
    EmployeeViewComponent,
    VisitorsComponent,
    EditFormComponent,
    SeeVisitorsComponent
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
