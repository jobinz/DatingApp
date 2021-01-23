import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public accountService: AccountService) {
    this.model.loginUser = this.accountService.loginUser;
   }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe(responce => {
        console.log(responce);
        this.model.loginUser = this.accountService.loginUser;
      }, error => {
        console.log(error);
      });
  }

  logout() {
    this.accountService.logout();
  }
}
