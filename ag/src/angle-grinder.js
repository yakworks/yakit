import angular from 'angular'
import uibModName from './ng/uib'
import agCommon from './ng/common'
import filtersMod from './ng/filters'
import agCompMod from './ng/components'
import agControlsMod from './ng/controls'
import agPathWithContext from './ng/pathWithContext'
import agSidebar from './ng/sidebar/sidebars'
import agSidenav from './ng/sidenav'
import uiRouterStateHelper from './ng/uirouter/stateHelper'

// foo
var agmod = angular.module('angleGrinder', [
  uiRouterStateHelper,
  uibModName,
  agCommon,
  filtersMod,
  agPathWithContext,
  agCompMod,
  agControlsMod,
  agSidebar,
  agSidenav
])

export default agmod.name

agmod.config(function($httpProvider, pathWithContextProvider) {
  'ngInject';
  // Intercept all http errors
  $httpProvider.interceptors.push('httpErrorsInterceptor')

  // Configure the context path
  var contextPath = $('body').data('context-path')
  if (contextPath != null) {
    pathWithContextProvider.setContextPath(contextPath)
  }
})

// see Running an AngularJS App in Production https://docs.angularjs.org/guide/production#!
agmod.config(function($compileProvider) {
  'ngInject';
  $compileProvider.debugInfoEnabled(false)
})
