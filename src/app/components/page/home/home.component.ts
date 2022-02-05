import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";
import {User} from "../../../models/user.model";

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tokenMap = new Map();
  currentTokenTable: Array<string> = [];
  user_session: User = new User();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tokenStorage: TokenStorageService,
  ) {
    let userString = JSON.stringify(tokenStorage.getUser());
    this.user_session = JSON.parse(userString);
    console.log(this.user_session?.first_name + ' ' + this.user_session?.last_name)
    let token: string | null =  this.tokenStorage.getToken();
    let tokenTable = token?.split('.');
    if(tokenTable) {
      this.tokenMap.set('header', tokenTable[0]);
      this.tokenMap.set('payload', tokenTable[1]);
      this.tokenMap.set('signature', tokenTable[2]);
    }
  }

  ngOnInit(): void {
  }

}
