import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageCalculatorComponent} from "../../pages/page-calculator/page-calculator.component";
import {PageGetComponent} from "../../pages/page-get/page-get.component";
import {PayComponent} from "../../pages/pay/pay.component";

const routes: Routes = [
  {
    path: 'calculator',
    component: PageCalculatorComponent
  },
  {
    path: 'get',
    component: PageGetComponent
  },
  {
    path: 'pay',
    component: PayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
