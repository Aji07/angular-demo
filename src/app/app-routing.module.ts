import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {FlexLayoutModule} from "@angular/flex-layout";
import { LoginComponent } from './@components/user/login/login.component';
import { RegisterComponent } from './@components/user/register/register.component';
import { HomeComponent } from './@components/home/home.component';
import { DemoComponent } from './@components/demo/demo.component';
import { Demo2Component } from './@components/demo2/demo2.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'register',component: RegisterComponent},
  {path:'home', component:HomeComponent},
  {path:'demo', component:DemoComponent},
  {path:'demo2', component:Demo2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
