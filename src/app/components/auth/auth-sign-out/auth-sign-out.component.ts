import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";

@Component({
  selector: 'app-auth-sign-out',
  templateUrl: './auth-sign-out.component.html',
  styleUrls: ['./auth-sign-out.component.scss']
})
export class AuthSignOutComponent implements OnInit {

  constructor(
    private tokenStorage: TokenStorageService,
  ) {

  }

  ngOnInit(): void {
    console.log(this.tokenStorage.getToken());
    console.log(this.tokenStorage.getUser());
  }


}
