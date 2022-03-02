import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {HeaderComponent} from "../../navigation/header/header.component";
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";

@Component({
  selector: 'app-dialog-confirmation-template',
  templateUrl: './dialog-confirmation-template.component.html',
  styleUrls: ['./dialog-confirmation-template.component.scss']
})
export class DialogConfirmationTemplateComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmationTemplateComponent>,
    public headerComponent: HeaderComponent,
    private tokenStorage: TokenStorageService,
  ) { }

  ngOnInit(): void {
  }

  validate(): void {
    console.log('sign out from dialog template');
    console.log('from dialog : '+this.tokenStorage.getToken());
    console.log('from dialog : '+this.tokenStorage.getUser());
    this.dialogRef.close();
    this.headerComponent.isOpen = !this.headerComponent.isOpen;
  }

  cancel(): void {
    console.log('dialog cancel');
    this.dialogRef.close();
    this.headerComponent.isOpen = !this.headerComponent.isOpen;
  }

}
