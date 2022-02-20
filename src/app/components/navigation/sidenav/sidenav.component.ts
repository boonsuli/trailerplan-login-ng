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
              private matDialogService: MatDialog,
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
    console.log("sidenavComponent onSidenavClose");
  }

  openDialogSignOut(): void {
    const dialogRef = this.matDialogService.open(DialogSignOutComponent, {
      hasBackdrop: false,
      panelClass: 'dialog-box'
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log('sidenavComponent onDialogSignOut data:'+ data);
      console.log('sidenavComponent onDialogSignOut close');
    });
    dialogRef.afterOpened().subscribe(data => {
    });
  }
}
