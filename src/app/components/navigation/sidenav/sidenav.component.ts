import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogSignOutComponent} from "../../dialog/dialog-sign-out/dialog-sign-out.component";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<Component>,
              private dialog: MatDialog,
              ) { }

  ngOnInit(): void {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  openDialogSignOut(): void {
    let dialogRef = this.dialog.open(DialogSignOutComponent, {
      height: '400px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(data=> {
      console.log('dialog close');
    })
  }
}
