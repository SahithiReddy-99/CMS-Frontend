import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmpLoginComponent } from "./components/emp-login/emp-login.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "emp-login", component: EmpLoginComponent },
  {
    path: "admin",
    loadChildren: () =>
      import("./modules/admin/admin.module").then((m) => m.AdminModule),
  },
  {
    path: "", redirectTo: "admin", pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
