import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  public auth = inject(AuthService);

  logout(): void {
    this.auth.logout({ logoutParams: { returnTo: window.location.origin }});
  }
}
