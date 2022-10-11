import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReviewComponent } from './add-review/add-review.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeSignUpComponent } from './employee-sign-up/employee-sign-up.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ShowBillsComponent } from './show-bills/show-bills.component';
import { ShowEmployeesComponent } from './show-employees/show-employees.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { SeeVisitorsComponent } from './see-visitors/see-visitors.component';

const routes: Routes = [

    {
        path: '', component: DashboardComponent, children: [
            { path: 'myProfile', component: UserhomeComponent },
            { path: 'emp', component: EmployeeSignUpComponent },
            { path: '', component: ReviewsComponent },
            { path: 'updateprofile', component: UpdateProfileComponent },
            { path: 'addreview', component: AddReviewComponent },
            { path: 'showbills', component: ShowBillsComponent },
            { path: 'view', component: AdminviewComponent },
            { path: 'showemployees', component: ShowEmployeesComponent },
            { path: 'empView', component: EmployeeViewComponent },
            { path: 'AddVisitors', component: VisitorsComponent },
            { path: 'editform', component: EditFormComponent },
            { path: 'SeeVisitors', component: SeeVisitorsComponent },

        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
