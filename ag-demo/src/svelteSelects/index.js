import ngSvelteShim from '@yakit/ag/src/ng/utils/ngSvelteShim'
import ngSvelteMod from '../svelte/AngularSvelte'
import SimpleSelects from './simple/Index.svelte'
import SimpleSelectsId from './simple-id/Index.svelte'
import SelectsInList from './list/Index.svelte'
import RestSelects from './rest/Index.svelte'

const appMod = angular.module('svelte.selects.demo', [ngSvelteMod])

appMod
  .component('svelteSimpleSelectsIndex', {
    controller: ngSvelteShim(SimpleSelects)
  })
  .component('svelteSimpleSelectsIdIndex', {
    controller: ngSvelteShim(SimpleSelectsId)
  })
  .component('svelteSelectsInListIndex', {
    controller: ngSvelteShim(SelectsInList)
  })
  .component('svelteGridSelectsIndex', {
    controller: ngSvelteShim(RestSelects)
  })

export default appMod.name
