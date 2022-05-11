import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  public isOpen = false;

  constructor(
    private tokenStorage: TokenStorageService,
  ) { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    console.log('headerComponent onToggleSidenav')
    this.sidenavToggle.emit();
    this.isOpen = !this.isOpen;
  }

  isCurrentUser(): boolean {
    if (this.tokenStorage.getToken()) {
      return true;
    } else {
      return false;
    }
  }
}
