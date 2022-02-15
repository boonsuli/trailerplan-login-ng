import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  public isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    console.log('headerComponent onToggleSidenav')
    this.sidenavToggle.emit();
    this.isOpen = !this.isOpen;
  }

}
