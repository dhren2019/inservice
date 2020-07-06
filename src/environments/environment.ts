// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyDanuo3x_DyQM9lzHUFzchVG-sbOFbHnS0",
    authDomain: "flayapp.firebaseapp.com",
    databaseURL: "https://flayapp.firebaseio.com",
    projectId: "flayapp",
    storageBucket: "flayapp.appspot.com",
    messagingSenderId: "782742914826",
    appId: "1:782742914826:web:96a4af295ebc5628e29cf3"
  },
  onesignal: {
    appId: '',
    googleProjectNumber: '',
    restKey: ''
  },
  stripe: {
    sk: ''
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
