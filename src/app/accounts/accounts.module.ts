import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ModifyAccountComponent } from './modify-account/modify-account.component';
import { ViewAccountComponent } from './view-account/view-account.component';
import { ViewAllAccountsComponent } from './view-all-accounts/view-all-accounts.component';
import { DeleteAccountsComponent } from './delete-accounts/delete-accounts.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateAccountComponent,
    ModifyAccountComponent,
    ViewAccountComponent,
    ViewAllAccountsComponent,
    DeleteAccountsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],

  exports:[
    CreateAccountComponent,
    ModifyAccountComponent,
    ViewAccountComponent,
    ViewAllAccountsComponent,
    DeleteAccountsComponent
  ]
})
export class AccountsModule { }
