import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
 private auth = inject(AuthService);
 private router = inject(Router);

 ngOnInit(): void {
   this.auth.isAuthenticated$.subscribe(isAuthenticated => {
     if (isAuthenticated) {
       this.router.navigate(['/home']);
     }
   });
 }

 public login(): void {
  this.auth.loginWithRedirect({
    appState: { target: '/home' }
  });
 }
}
