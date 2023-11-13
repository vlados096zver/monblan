import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../../pages/login/login.component";
import {SignupComponent} from "../../pages/signup/signup.component";
import {RestoreComponent} from "../../pages/restore/restore.component";
import {SetPasswordComponent} from "../../pages/set-password/set-password.component";
import {ConfirmEmailComponent} from "../../pages/confirm-email/confirm-email.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'restore',
    component: RestoreComponent
  },
  {
    path: 'set-password',
    component: SetPasswordComponent
  },
  {
    path: 'confirm-email',
    component: ConfirmEmailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
