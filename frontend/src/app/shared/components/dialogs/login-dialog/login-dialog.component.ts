import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OAuthService } from 'angular-oauth2-oidc';
import { filter } from 'rxjs';
import { Router } from '@angular/router';
import { googleAuthConfig } from '../../../../oauth.config';

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.scss',
})
export class LoginDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private oauthService: OAuthService,
    private router: Router
  ) {
    this.oauthService.configure(googleAuthConfig);
    // this.oauthService.initCodeFlow();
    this.oauthService.initLoginFlow();
    this.oauthService.events
      .pipe(filter((e) => e.type === 'token_received'))
      .subscribe((_) => {
        console.debug('state', this.oauthService.state);
        this.oauthService.loadUserProfile();

        const scopes = this.oauthService.getGrantedScopes();
        console.debug('scopes', scopes);
      });
  }

  loginGoogleHandler() {
    this.oauthService.loadDiscoveryDocumentAndLogin().then((_) => {
      this.router.navigate(['/']);
    });
  }
}
