import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared.module";
import {PublicRoutingModule} from "./public-routing.module";
import {PageCalculatorComponent} from "../../pages/page-calculator/page-calculator.component";
import {PayComponent} from "../../pages/pay/pay.component";
import {PageGetComponent} from "../../pages/page-get/page-get.component";

const components: any = [
  PageCalculatorComponent,
  PageGetComponent,
  PayComponent
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
        PublicRoutingModule,
        SharedModule
    ],
  exports: [
    ...components
  ],
})
export class PublicModule { }
