import { Component } from '@angular/core';

@Component({
  selector: 'app-callback',
  standalone: true,
  template: `<p>enticación...</p>`,
})
export class Callback {
  // Auth0 SDK maneja el callback automáticamente
  // Este componente solo muestra un mensaje mientras procesa
}
