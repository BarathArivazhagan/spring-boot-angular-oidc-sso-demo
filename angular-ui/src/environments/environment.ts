// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  gatewayurl: 'http://localhost:9500',
  serverUrl: 'http://localhost:8080/auth/realms/master',
  sso: {
    clientId : 'demo-app',    
    redirectUri : window.location.origin + '/',
    scope: 'openid profile microprofile-jwt address email',
    tokenEndpoint:  '/protocol/openid-connect/token',
    userinfoEndpoint:  '/protocol/openid-connect/userinfo',
    authorizationEndpoint:  '/protocol/openid-connect/auth',
    jwksEndpoint: '/protocol/openid-connect/certs',
    showDebugInformation: true,
    requireHttps: false,
    responseType: 'id_token token',
    logoutUrl: '/protocol/openid-connect/logout', 
    clearHashAfterLogin: true,
    jwks: {
      keys: [
      {
      kid: "qoj6GshfuR-jbgHB1tlnaQ3UoEe7GlCVK0wxoS08flQ",
      kty: "RSA",
      alg: "RS256",
      use: "sig",
      n: "mOpg9uuRD9BFaZMoUfynug80iCgm7ytz4yWGSjoke66ssyEyMy-D0ebb68bu-jIRA8Qfd0-82P_86Fh9ZBTa08yxmyfxxfEEmAxejblfcR5keBOfgNhfe7ZCd52NimNxzUJl0LpD4lzwocSgngahNbQsU6J1bmM0c9UGb_1tyuepTBaVD2DvWA6bEMI0b9wMVJDl09_ieSECyM9djnQpJu9zrQiZfshO1J9hfmiIl81d1fm8Gou2aiQ0-THR7_pg3oHKdfTWdL5oQWMavSiRYae-PC3xiE14UOyBPvBGHbb6o-JOhXlGj5KU-8TuGKsTpuaxwECxYduY-wW_FnnrmQ",
      e: "AQAB",
      x5c: [
      "MIICmzCCAYMCBgFts+lfaDANBgkqhkiG9w0BAQsFADARMQ8wDQYDVQQDDAZtYXN0ZXIwHhcNMTkxMDEwMDQyMjU5WhcNMjkxMDEwMDQyNDM5WjARMQ8wDQYDVQQDDAZtYXN0ZXIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCY6mD265EP0EVpkyhR/Ke6DzSIKCbvK3PjJYZKOiR7rqyzITIzL4PR5tvrxu76MhEDxB93T7zY//zoWH1kFNrTzLGbJ/HF8QSYDF6NuV9xHmR4E5+A2F97tkJ3nY2KY3HNQmXQukPiXPChxKCeBqE1tCxTonVuYzRz1QZv/W3K56lMFpUPYO9YDpsQwjRv3AxUkOXT3+J5IQLIz12OdCkm73OtCJl+yE7Un2F+aIiXzV3V+bwai7ZqJDT5MdHv+mDegcp19NZ0vmhBYxq9KJFhp748LfGITXhQ7IE+8EYdtvqj4k6FeUaPkpT7xO4YqxOm5rHAQLFh25j7Bb8WeeuZAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAI5PIdgPE0SxmKjz/xSxVltn+d3sRVQQoNjn0nSmOkjHZI7iTvpRsfcfXyFY58RJ6AG4VV9ldCGVRqhW2YFht2Gmmzg+Vses+1wOSHPqOg6XXpQZzhrEI6w8WaiMNAr4DBIy+uJz2S79ht2oy+dadp9AywLdZk46sPcj+93XFvJGW/C8R62R53gwJGEjqGiJPtt9k4hJoSkbNX2MzCgJxbPQDa/AGvnCuBP8hGOZ+uXT6aCSmhpibX0tqg7kubDiwKcLwCiGqzRwmg1bqpvj1rHATnO3EkQdpT16bKYi+PE/5XCJSKMx5owjVGU3LOrX19Epn+hh5zoPM6OjtLXF/M4="
      ],
      x5t: "9xbqRVZeD8V_vin2oWQGImv1K-U",
      "x5t#S256": "OH_oTT5x6b80lndB7_6b8wsYWy2Sv4q5qQzAlnxHi54"
      }
      ]
      }
   
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
