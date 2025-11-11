import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthHttpInterceptor, provideAuth0 } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [    
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    },
    provideAuth0({
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
      authorizationParams: environment.auth.authorizationParams,
      httpInterceptor: {
        allowedList: [
          {
            uri: `${environment.apiBaseUrl}/*`,
            tokenOptions: {
              authorizationParams: {
                audience: environment.auth.authorizationParams.audience,
                scope: environment.auth.authorizationParams.scope
              }
            }
          }
        ]
      }
    })
  ]
};
