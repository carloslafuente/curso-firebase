import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AngularMaterialModule } from './angular-material.module';

import { AuthComponent } from './auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AuthComponent, SignUpComponent, LoginComponent],
  imports: [CommonModule, AuthRoutingModule, AngularMaterialModule],
})
export class AuthModule {}
