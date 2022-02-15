import { get, writable, derived } from 'svelte/store';
import mix from '../mix/mix-it-with';
import appConfigApi from '../stores/AppConfigApi'
import { isEmpty, _defaults, isUndefined, isEqual } from '../dash';
/** @typedef {import('svelte/store').Writable<{}>} Writable */

export const StateStore = ({dataApi, opts = {}}) => {

  const stateValues = {
    /** if this is init and has retrieved its config*/
    isReady: false,
    configs: undefined,
    isDense: false,
    showSearchForm: false,
    canEdit: true,
    isLoading: true
  }

  //the store sub that is returned
  const {subscribe, set, update} = writable(stateValues)

  const obj = {}

  function setLoading(val){
    update(_state => {
      _state.isLoading = val
      return _state
    })
  }

  function setReady(val){
    update(_state => {
      _state.isReady = val
      return _state
    })
  }

  return mix(obj).extend({
    subscribe, set, update,
    setLoading,
    //normally use the $resource.isReady but if mixing custom resource can use this as a shortcut check
    isReady(){
      return stateValues.isReady
    },
    //use when mixing custom resources
    setReady(){
      setReady(true)
    }
  }) //end mix
}

export default StateStore
