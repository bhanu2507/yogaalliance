angular.module('firebase.config', [])
  .constant('FBURL', 'https://burning-fire-1641.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');
