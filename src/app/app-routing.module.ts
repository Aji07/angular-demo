import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {FlexLayoutModule} from "@angular/flex-layout";
import { LoginComponent } from './@components/user/login/login.component';
import { RegisterComponent } from './@components/user/register/register.component';
import { HomeComponent } from './@components/home/home.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'register',component: RegisterComponent},
  {path:'home', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
