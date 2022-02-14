import { get, writable, derived } from 'svelte/store';
import mix from '../mix/mix-it-with';
import appConfigApi from './AppConfigApi'
import { findIndexById } from '../finders'
import { isEmpty, _defaults, isUndefined } from '../dash';
/** @typedef {import('svelte/store').Writable<{}>} Writable */

/**
 * Resource for dataApi in the spirit of ActiveRecord and angularJs old $resource service.
 * Default is paged view.
 * Used to back any editable grid or list and has stores for
 *  - currentPage
 *  - currentItem
 *  - selectedIds
 *
 * @param {*} dataApi the dataApi to hit
 * @returns the resource instance
 */
export const Resource = ({dataApi, opts = {}}) => {
  const testDelay = 1000 //for testing DO NOT CHECK IN WITH A VALUE

  _defaults(opts, {
    page: 1, max: 20
  })

  const stateValues = {
    /** if this is init and has retrieved its config*/
    isReady: false,
    configs: undefined,
    isDense: false,
    showSearchForm: false,
    canEdit: true,
    isLoading: true
  }

  let currentPage = writable({})
  let currentItem = writable({})
  //it seems stores clear data on last subscription
  // currentPage.subscribe(data => {
  //   console.log("crudQueryStores pageViewStore sub", data)
  // });

  const restrictSearch = writable({})
  const q = writable({})
  const sort = writable({})
  const qSearch = writable('')
  const page = writable(opts.page)
  const max = writable(opts.max)

  const selectedIds = writable([])

  const searchParams = derived([restrictSearch, q, qSearch, sort, page, max],
                                ([$restrictSearch, $q, $qSearch, $sort, $page, $max]) => {
    let svals = {q: $q, qSearch: $qSearch, sort:$sort, page: $page, max: $max,}
    //merge restrictSearch in if it there
    if(!isEmpty($restrictSearch)) {
      svals.q = {...svals.q, ...$restrictSearch}
    }
    return svals;
  });

  //the store sub that is returned
  const state = writable(stateValues)

  let currentId
  // let appConfig
  let apiPath = dataApi.path
  let apiKey = dataApi.key

  const obj = {
    unsubs: [],
    state,
    currentPage,
    currentItem,
    restrictSearch,
    q,
    qSearch,
    page,
    max,
    dataApi,
    sort,
    selectedIds,
    apiPath,
    apiKey
  }

  // async function init() {
  //   appConfig = await appConfigApi.getConfig(apiKey)
  // }

  function updateFromParams(p) {
    ['q', 'sort', 'qSearch', 'page', 'max'].forEach(k => {
      if(p[k] !== undefined) obj[k].set(p[k])
    })
  }

  function setLoading(val){
    state.update(_state => {
      _state.isLoading = val
      return _state
    })
  }

  function setReady(val){
    state.update(_state => {
      _state.isReady = val
      return _state
    })
  }

  return mix(obj).extend({
    subscribe: state.subscribe,
    set: state.set,

    async init() {
      if(stateValues.isReady) return
      await obj.loadConfigs()
      setReady(true)
      return obj
    },

    /** helper for testing */
    delay(ms){
      ms = ms || testDelay

      return new Promise(resolve => setTimeout(resolve, ms))
    },
    /** generates an id from the apiKey */
    ident(){
      return apiPath.replace('/', '_')
    },
    /** lazy load the app config */
    async getConfigs(){
      if(!stateValues.configs) { await obj.loadConfigs() }
      return stateValues.configs
    },
    /** load the app config */
    async loadConfigs(){
      stateValues.configs = await appConfigApi.getConfig(apiKey)
      state.update(_state => stateValues )
    },


    /** shortcut to get the current data from the page store */
    getCurrentData(){
      const pagerData = get(currentPage)
      return pagerData ? pagerData.data : pagerData
    },

    setCurrent(_item){
      currentId = _item.id
      selectedIds.set([currentId])
      return currentItem.set(_item)
    },

    getCurrentItem(){
      return get(currentItem)
    },

    getCurrentId(){
      return currentId
    },

    async loadCurrent(_id){
      setLoading(true)
      if(_id !== undefined) currentId = parseInt(_id)
      const updatedItem = await dataApi.get(currentId)
      await obj.delay()
      obj.setCurrent(updatedItem)
      setLoading(false)
    },

    /** sets the currentItem from the data in the currentPage */
    setCurrentId(_id) {
      if(!_id) return
      //make sure its an int
      currentId = parseInt(_id)
      if(_id === currentId) return //if its the same return

      const currentPageVal = get(currentPage)
      const pageData = currentPageVal['data']
      const dataItem = dataApi.findById(pageData, currentId)
      obj.setCurrent(dataItem)
    },

    /**
     * adds searchParams, which are the query params ( the part after the ? )
     * and then calls the get. if the params has a q property and its a string then
     * @param {*} params
     */
    async query(p) {
      setLoading(true)
      if(p) updateFromParams(p)
      const $searchParams = get(searchParams)
      // console.log("query", apiKey, $searchParams)
      const page = await dataApi.search($searchParams)
      await obj.delay()
      currentPage.set(page)
      setLoading(false)
      // console.log("stateValues", apiKey, p, stateValues)
      return page
    },

    /**
     * an alias to list that can be overriden.
     */
    async reload() {
      // selectedIds.set([])
      return obj.query()
    },

    /**
     * saves to dataApi and updates the current store
     */
    async update(values) {
      if(!values.id) throw new Error("update called without id")
      const updatedItem = await dataApi.update(values)
      await obj.delay()
      obj.setCurrent(updatedItem)
      return updatedItem
    },
    //normally use the $resource.isReady but if mixing custom resource can use this as a shortcut check
    isReady(){
      return stateValues.isReady
    },
    //use when mixing custom resources
    setReady(){
      setReady(true)
      state.update(_state => ({..._state, isReady:true}))
    }


  }) //end mix
}

export default Resource
