import { Component } from '@angular/core';
import { AccountService } from 'src/app/account.service';
import { Current_Account1 } from '../Current_Account1';

@Component({
  selector: 'app-modify-account',
  templateUrl: './modify-account.component.html',
  styleUrls: ['./modify-account.component.css']
})
export class ModifyAccountComponent {
  constructor(private accountService:AccountService){}
  current_Account1 = new Current_Account1();

  modifyAccount()
  {
    this.accountService.ModifyAccount(this.current_Account1).subscribe(
      res => {alert(res)},
      err => {console.log(err)}

    )
  }
}
