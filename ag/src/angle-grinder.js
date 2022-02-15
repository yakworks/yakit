import angular from 'angular'
import agSidebar from './ng/sidebar/sidebars'
import agSidenav from './ng/sidenav'
import uiRouterStateHelper from './ng/uirouter/stateHelper'

// foo
var agmod = angular.module('angleGrinder', [
  uiRouterStateHelper,
  agSidebar,
  agSidenav
])

export default agmod.name

// see Running an AngularJS App in Production https://docs.angularjs.org/guide/production#!
agmod.config(function($compileProvider) {
  'ngInject';
  $compileProvider.debugInfoEnabled(false)
})
