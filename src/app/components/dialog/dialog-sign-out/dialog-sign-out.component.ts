import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";
import {SidenavService} from "../../../services/widget/sidenav.service";
import {HeaderComponent} from "../../navigation/header/header.component";

@Component({
  selector: 'app-dialog-sign-out',
  templateUrl: './dialog-sign-out.component.html',
  styleUrls: ['./dialog-sign-out.component.scss']
})
export class DialogSignOutComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogSignOutComponent>,
    public headerComponent: HeaderComponent,
    private tokenStorage: TokenStorageService,
    private sidenav: SidenavService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  signOut(): void {
    console.log('sign out from dialog');
    console.log('from dialog : '+this.tokenStorage.getToken());
    console.log('from dialog : '+this.tokenStorage.getUser());
    this.dialogRef.close();
    this.sidenav.toggle();
    this.router.navigateByUrl('/auth-sign-in');
  }

  dialogCancel(): void {
    console.log('dialog cancel');
    this.dialogRef.close();
    this.headerComponent.isOpen = !this.headerComponent.isOpen;
  }
}
