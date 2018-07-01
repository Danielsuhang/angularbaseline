// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA4J3nqTd-bo1P-5oQQcYjB5yMYwwdLsLI",
    authDomain: "test-med-hacks.firebaseapp.com",
    databaseURL: "https://test-med-hacks.firebaseio.com",
    projectId: "test-med-hacks",
    storageBucket: "test-med-hacks.appspot.com",
    messagingSenderId: "1004751794838"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
