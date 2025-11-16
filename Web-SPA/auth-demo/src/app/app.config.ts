import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
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
                scope: environment.auth.authorizationParams.scope,
              },
            },
          },
        ],
      },
      skipRedirectCallback: false,
      cacheLocation: 'localstorage',
      useRefreshTokens: true,
    }),
  ],
};
