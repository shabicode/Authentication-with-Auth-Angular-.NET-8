export const environment = {
    production: false,
    auth: {
        domain: 'dev-xar6kgj2phq4ux25.us.auth0.com',
        clientId: 'gXIC6wGgC48dpwQXWmjP16pOv8C8oUDt',
        authorizationParams: {
            redirect_uri: 'http://localhost:4200/callback',
            audience: 'https://api.shabicodev.dev',
            scope: 'openid profile email'
        }
    },
    apiBaseUrl: 'https://localhost:7079'
}