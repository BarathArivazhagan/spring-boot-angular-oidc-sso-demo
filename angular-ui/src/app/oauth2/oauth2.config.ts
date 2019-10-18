import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../../environments/environment';
 
export const authConfig: AuthConfig = {
 
  issuer: environment.serverUrl, 
  redirectUri: environment.sso.redirectUri,
  clientId: environment.sso.clientId,
  scope: environment.sso.scope,
  tokenEndpoint: environment.serverUrl.concat(environment.sso.tokenEndpoint),
  userinfoEndpoint:  environment.serverUrl.concat(environment.sso.userinfoEndpoint),
  showDebugInformation: environment.sso.showDebugInformation,
  loginUrl:  environment.serverUrl.concat(environment.sso.authorizationEndpoint),
  requireHttps: environment.sso.requireHttps,
  responseType: environment.sso.responseType,
  logoutUrl: environment.sso.logoutUrl,  
  jwks: environment.sso.jwks
  
};