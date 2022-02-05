import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user.model";
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  user_session: User = new User();

  constructor(
    private tokenStorage: TokenStorageService
  ) {
    let userString = JSON.stringify(tokenStorage.getUser());
    this.user_session = JSON.parse(userString);
  }

  ngOnInit(): void {
  }

}
