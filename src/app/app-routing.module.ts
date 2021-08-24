/* --- Angular Imports --- */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* --- Angular Component --- */
import { FormComponent } from './components/form/form.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { TableComponent } from './components/table/table.component';
import { AuthGardService } from './gards/auth-gard.service';


const routes: Routes = [
  {path:"Home",component:HomePageComponent,canActivate:[AuthGardService]},
  {path:"Table",component:TableComponent,canActivate:[AuthGardService]},
  {path:"Form",component:FormComponent,canActivate:[AuthGardService]},
  {path:"SignUp",component:SingUpComponent},
  {path:"LogIn",component:LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
