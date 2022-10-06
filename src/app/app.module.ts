import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AngularMaterialModule } from './angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { EmpLoginComponent } from './components/emp-login/emp-login.component';
import { LandingComponent } from './components/landing/landing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EmpLoginComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule, NgbModule,


  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
