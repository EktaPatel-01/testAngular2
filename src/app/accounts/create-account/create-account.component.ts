import { Component } from '@angular/core';
import { Current_Account1 } from '../Current_Account1';
import { AccountService } from 'src/app/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  constructor(private accountService:AccountService){}
  current_Account1 = new Current_Account1();

  localCreateAccount()
  {
    this.accountService.CreateAccount(this.current_Account1).subscribe(
      res => {alert(res)},
      err => {console.log(err)}

    )
  }
}
