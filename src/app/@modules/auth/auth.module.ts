import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// @Componentes
import { LoginComponent } from 'src/app/@components/user/login/login.component';
import { RegisterComponent } from 'src/app/@components/user/register/register.component';
import { HomeComponent } from 'src/app/@components/home/home.component';
import { DemoComponent } from 'src/app/@components/demo/demo.component';
import { Demo2Component } from 'src/app/@components/demo2/demo2.component';
// @Modules
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomPipePipe } from 'src/app/@pipes/custom-pipe.pipe';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CustomPipePipe,
    DemoComponent,
    Demo2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTooltipModule,

  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DemoComponent,
    Demo2Component
  ]
})
export class AuthModule {

}
