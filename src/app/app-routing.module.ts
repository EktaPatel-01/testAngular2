import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './accounts/create-account/create-account.component';
import { ModifyAccountComponent } from './accounts/modify-account/modify-account.component';
import { DeleteAccountsComponent } from './accounts/delete-accounts/delete-accounts.component';
import { ViewAccountComponent } from './accounts/view-account/view-account.component';
import { ViewAllAccountsComponent } from './accounts/view-all-accounts/view-all-accounts.component';

const routes: Routes = [
  {path:'',component: ViewAllAccountsComponent},
  {path:'CreateAccount',component: CreateAccountComponent},
  {path:'ModifyAccount',component: ModifyAccountComponent},
  {path:'DeleteAccount',component: DeleteAccountsComponent},
  {path:'ViewAccount',component: ViewAccountComponent},
  {path:'ViewallAccounts',component: ViewAllAccountsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
