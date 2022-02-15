// import angular from 'angular'
import agModule from '@yakit/ag/src/angle-grinder'

// demo sections
import svelteModule from './svelte'
import svelteDataList from './svelteDataList'
import svelteSelects from './svelteSelects'
import formify from './formify'

// store
import dataApiModule from './store'

// fresh sidebar

export default angular.module('app', [
  agModule,
  dataApiModule,
  svelteModule,
  svelteDataList,
  svelteSelects,
  formify
]).name
