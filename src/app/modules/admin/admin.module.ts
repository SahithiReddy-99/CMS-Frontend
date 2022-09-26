import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeSignUpComponent } from './employee-sign-up/employee-sign-up.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    EmployeeSignUpComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
