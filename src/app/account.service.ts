import { Injectable } from '@angular/core';
import { Current_Account1 } from './accounts/Current_Account1';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = "http://localhost:8080/currentAccount";

  CreateAccount(current_Account1: Current_Account1){
    return this.httpClient.post(this.baseUrl+"/add",current_Account1,{responseType:'text'});
  }

  ModifyAccount(current_Account1:Current_Account1){
    return this.httpClient.put(this.baseUrl+"/update",current_Account1, {responseType: 'text'})
  }

  DeleteAccount(acno: number){
    return this.httpClient.delete(this.baseUrl+"/delete/"+acno,{responseType: 'text'});
  }

  ViewAccount(acno:number){
    return this.httpClient.get<Current_Account1>(this.baseUrl+"/"+acno);
  }

  ViewallAccounts(){
    return this.httpClient.get<Current_Account1[]>(this.baseUrl+"/")
  }
}
