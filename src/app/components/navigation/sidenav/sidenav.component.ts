import {Component, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogSignOutComponent} from "../../dialog/dialog-sign-out/dialog-sign-out.component";
import {SidenavService} from "../../../services/widget/sidenav.service";
import {MatSidenav} from "@angular/material/sidenav";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<Component>,
              public headerComponent: HeaderComponent,
              private dialog: MatDialog,
              private sidenavService: SidenavService,
              public sidenav: MatSidenav,
              ) { }

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  public onSidenavClose = () => {
    // @ts-ignore
    document.getElementById("hamburger-menu-icon").classList.remove("is-active");
    this.sidenav.toggle();
    this.headerComponent.isOpen = !this.headerComponent.isOpen;
  }

  openDialogSignOut(): void {
    let dialogRef = this.dialog.open(DialogSignOutComponent, {
      height: '300px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log('data:'+ data);
      console.log('sidenav dialog close');
    });
  }
}
