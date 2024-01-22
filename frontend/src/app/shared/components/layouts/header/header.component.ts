import { Component } from '@angular/core';
import { ButtonComponent } from '../../controls/button/button.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../../dialogs/login-dialog/login-dialog.component';
import { DropdownComponent } from '../../templates/dropdown/dropdown.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, DropdownComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private dialog: MatDialog) {}
  openLoginDialog() {
    this.dialog.open(LoginDialogComponent);
  }
}
