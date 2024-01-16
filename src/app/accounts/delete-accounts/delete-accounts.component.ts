import { Component } from '@angular/core';
import { AccountService } from 'src/app/account.service';
import { Current_Account1 } from '../Current_Account1';

@Component({
  selector: 'app-delete-accounts',
  templateUrl: './delete-accounts.component.html',
  styleUrls: ['./delete-accounts.component.css']
})
export class DeleteAccountsComponent {
  constructor(private accountService:AccountService){}

  acno : number =0;
  deleteAccount()
  {
    this.accountService.DeleteAccount(this.acno).subscribe(
      res => {alert(res)},
      err => {console.log(err)}

    )
  }
}
