import { Component } from '@angular/core';
import { AccountService } from 'src/app/account.service';
import { Current_Account1 } from '../Current_Account1';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent {
constructor(private accountService:AccountService){}

acno : number=0;
current_Account1=new Current_Account1();

viewAccount()
{
  this.accountService.ViewAccount(this.acno).subscribe(
    res =>{this.current_Account1=res;},
    err=>{console.log(err.message);}
  )
}
}
