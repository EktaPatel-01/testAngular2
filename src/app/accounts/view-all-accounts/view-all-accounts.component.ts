import { Component } from '@angular/core';
import { AccountService } from 'src/app/account.service';
import { Current_Account1 } from '../Current_Account1';

@Component({
  selector: 'app-view-all-accounts',
  templateUrl: './view-all-accounts.component.html',
  styleUrls: ['./view-all-accounts.component.css']
})
export class ViewAllAccountsComponent {


constructor(private accountService:AccountService){}
current_AccountList1 : Current_Account1[]=[];
viewAll()
{
  this.accountService.ViewallAccounts().subscribe(
    res => {this.current_AccountList1=res;
      console.log(this.current_AccountList1,'hii');
      },
    err => {console.log(err)}

  )
}
}

