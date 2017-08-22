// 'use strict';

// // Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');

//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);

/** 
 * Se declara un nuevo module junto a todas las dependecias('WidgetApp.controllers') que 
 * va a utilizar dicho modulo('WidgetApp')
 * Sintaxis: angular.module(name, [requires], [configFn]);
*/
angular.module('WidgetApp', [
  'WidgetApp.controllers'
]);
