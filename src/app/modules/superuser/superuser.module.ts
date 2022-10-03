import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperuserRoutingModule } from './superuser-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';

import { HeaderComponent } from '../admin/header/header.component';
@NgModule({
  declarations: [
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    SuperuserRoutingModule,
   
  ]
})
export class SuperuserModule { }
