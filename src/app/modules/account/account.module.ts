import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared.module";
import {AccountRoutingModule} from "./account-routing.module";
import {AccountComponent} from "../../pages/account/account.component";
import {EmptyComponent} from "../../components/empty/empty.component";
import {TabsComponent} from "../../components/tabs/tabs.component";
import {DocComponent} from "../../components/doc/doc.component";

const components: any = [
  EmptyComponent,
  TabsComponent,
  DocComponent,
  AccountComponent
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
        AccountRoutingModule,
        SharedModule
    ],
  exports: [
    ...components
  ],
})
export class AccountModule { }
