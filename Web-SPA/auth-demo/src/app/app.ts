import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from "@angular/router";
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private auth = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    this.auth.appState$.subscribe(appState => {
      const target = appState?.target ?? '/home';
      this.router.navigate([target]);
    });
  }
}
