import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared.module";
import {AuthRoutingModule} from "./auth-routing.module";
import {LoginComponent} from "../../pages/login/login.component";
import {SignupComponent} from "../../pages/signup/signup.component";
import {SetPasswordComponent} from "../../pages/set-password/set-password.component";
import {RestoreComponent} from "../../pages/restore/restore.component";
import {ConfirmEmailComponent} from "../../pages/confirm-email/confirm-email.component";

const components: any = [
  LoginComponent,
  SignupComponent,
  SetPasswordComponent,
  RestoreComponent,
  ConfirmEmailComponent
]

@NgModule({
  declarations: [
    ...components
  ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AuthRoutingModule,
        SharedModule
    ],
  exports: [
    ...components
  ],
})
export class AuthModule { }
