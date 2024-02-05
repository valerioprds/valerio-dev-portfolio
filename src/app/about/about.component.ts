import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ContactComponent } from '../contact/contact.component';
import { TechComponent } from "../tech/tech.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [MatDialogModule, TechComponent]
})
export class AboutComponent {
  constructor(private dialogRef: MatDialog) {}
  openContactDialog() {
    this.dialogRef.open(ContactComponent, {
      width: '800px',
      height: 'auto',
      position: {
        top: '150px', // Adjust this value as needed
      },
    });
  }
}
