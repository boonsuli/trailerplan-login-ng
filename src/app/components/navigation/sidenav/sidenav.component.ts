import {Component, OnInit, Output, EventEmitter, ViewChild, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
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
    console.log("sidenavComponent onSidenavClose");
  }

  openDialogSignOut(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = false;
    dialogConfig.panelClass = 'dialog-container';
    dialogConfig.height = '170px';
    dialogConfig.width = '500px';
    dialogConfig.data = {
      title: 'Logout TrailerPlan ?',
      description: 'This will exit the application and remove the user context'
    };

    const dialogRef = this.dialog.open(DialogSignOutComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      console.log('sidenavComponent onDialogSignOut data:'+ data);
      console.log('sidenavComponent onDialogSignOut close');
    });
    dialogRef.afterOpened().subscribe(data => {
      console.log(data);
    });
  }
}
