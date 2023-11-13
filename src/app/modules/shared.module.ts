import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IconLogoComponent} from "../components/icons/icon-logo/icon-logo.component";
import {IconEmptyComponent} from "../components/icons/icon-empty/icon-empty.component";
import {IconLoadComponent} from "../components/icons/icon-load/icon-load.component";
import {InputRangeComponent} from "../components/inputs/input-range/input-range.component";
import {InputValueComponent} from "../components/inputs/input-value/input-value.component";
import {IconHistoryComponent} from "../components/icons/icon-history/icon-history.component";
import {IconCabinetComponent} from "../components/icons/icon-cabinet/icon-cabinet.component";
import {IconCreditComponent} from "../components/icons/icon-credit/icon-credit.component";
import {IconDocComponent} from "../components/icons/icon-doc/icon-doc.component";
import {IconPlusComponent} from "../components/icons/icon-plus/icon-plus.component";
import {IconMinusComponent} from "../components/icons/icon-minus/icon-minus.component";
import {FileUploaderComponent} from "../components/file-uploader/file-uploader.component";
import {CalculatorComponent} from "../components/calculator/calculator.component";
import {HeaderComponent} from "../components/header/header.component";
import {FooterComponent} from "../components/footer/footer.component";
import {IconPdfComponent} from "../components/icons/icon-pdf/icon-pdf.component";

const components: any = [
  InputRangeComponent,
  InputValueComponent,
  FileUploaderComponent,
  CalculatorComponent,
  HeaderComponent,
  FooterComponent,
]

const dynamic: any = [
]

const icons: any = [
  IconLogoComponent,
  IconEmptyComponent,
  IconLoadComponent,
  IconCabinetComponent,
  IconHistoryComponent,
  IconCreditComponent,
  IconDocComponent,
  IconMinusComponent,
  IconPlusComponent,
  IconPdfComponent
]


@NgModule({
  declarations: [
    ...components,
    ...dynamic,
    ...icons
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ...components,
    ...dynamic,
    ...icons
  ],
})
export class SharedModule { }
