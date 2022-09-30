import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeSignUpComponent } from './employee-sign-up/employee-sign-up.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UserhomeComponent } from './userhome/userhome.component';


const routes: Routes = [

    {
        path: '', component: DashboardComponent, children: [
            { path: 'myProfile', component: UserhomeComponent },
            { path: 'emp', component: EmployeeSignUpComponent },
            { path: '', component: ReviewsComponent },
            { path: 'updateprofile', component: UpdateProfileComponent }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
