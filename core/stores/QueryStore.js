import { get, writable, derived } from 'svelte/store';
import mix from '../mix/mix-it-with';
import { findIndexById } from '../finders'
import { isEmpty, _defaults, isUndefined } from '../dash';
/** @typedef {import('svelte/store').Writable<{}>} Writable */

/**
 * Query store for dataApi. Default is paged view.
 * Used to back any editable grid or list and has stores for
 *  - currentPage
 *  - currentItem
 *  - selectedIds
 *
 * @param {*} dataApi the dataApi to hit
 * @returns
 */
export const QueryStore = ({dataApi, opts = {}}) => {

  _defaults(opts, {
    page: 1, max: 20
  })

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
  const settings = writable({})

  const searchParams = derived([restrictSearch, q, qSearch, sort, page, max],
                                ([$restrictSearch, $q, $qSearch, $sort, $page, $max]) => {
    let svals = {q: $q, qSearch: $qSearch, sort:$sort, page: $page, max: $max,}
    //merge restrictSearch in if it there
    if(!isEmpty($restrictSearch)) {
      svals.q = {...svals.q, ...$restrictSearch}
    }
    return svals;
  });

  let currentId

  // function searchMerge(params) {
  //   let searchParams = ds.setupSearchParams(params)
  //   console.info("searchParams",ds.key, searchParams)
  //   const page = await api.get({ searchParams })

  //   ds.stores.setPageView(page)
  //   return page
  // }

  const obj = {
    unsubs: [],
    settings,
    currentPage,
    currentItem,
    restrictSearch,
    q,
    qSearch,
    page,
    max,
    dataApi,
    sort,
    apiPath: dataApi.path,
    apiKey: dataApi.key
  }

  function updateFromParams(p) {
    ['q', 'sort', 'qSearch', 'page', 'max'].forEach(k => {
      if(p[k] !== undefined) obj[k].set(p[k])
    })
  }

  return mix(obj).with({

    setCurrent(_item){
      currentId = _item.id
      return currentItem.set(_item)
    },

    getCurrentItem(){
      return get(currentItem)
    },

    getCurrentId(){
      return currentId
    },

    async loadCurrent(_id){
      if(_id !== undefined) currentId = parseInt(_id)
      const updatedItem = await dataApi.get(currentId)
      obj.setCurrent(updatedItem)
    },

    /** sets the currentItem from the data in the currentPage */
    setCurrentId(_id) {
      if(!_id) return
      //make sure its an int
      currentId = parseInt(_id)
      console.log("setCurrentId", _id, currentId)
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
    async list(p) {
      if(p) updateFromParams(p)
      const $searchParams = get(searchParams)
      const page = await dataApi.search($searchParams)
      currentPage.set(page)
      return page
    },

    /**
     * an alias to list that can be overriden.
     */
    async reload() {
      return obj.list()
    },

    /**
     * saves to dataApi and updates the current store
     */
    /**
     *
     * @param {*} values to pass to server to save, should have the id in it.
     * @returns
     */
    async update(values) {
      if(!values.id) throw new Error("update called without id")
      const updatedItem = await dataApi.update(values)
      obj.setCurrent(updatedItem)
      return updatedItem
    }


  }) //end mix
}

export default QueryStore
