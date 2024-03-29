import prune from '../../prune';
import stringify from '../../stringify';
import mix from '../../mix/mix-it-with';

export const restQuery = ({ api }) => ds => {

  /**
   * when grid is for child or detail data, restrictSearch is what to filter it by,
   * for example is showing invoices for customer then restrictSearch might be set to {custId:123}
   */
  let { restrictSearch } = ds


  return mix(ds).with({

    async get(id) {
      const item = await api.getById(id)
      // ds.stores.setItem(item)
      return item
    },

    /**
     * adds searchParams, which are the query params ( the part after the ? )
     * and then calls the get. if the params has a q property and its a string then
     * @param {*} params
     */
    async search(params) {
      let searchParams = ds.setupSearchParams(params)
      const page = await api.get({ searchParams })

      // ds.stores.setPageView(page)
      return page
    },

    // prunes params and stringifies the q param if exists
    setupSearchParams(params){
      params = prune(params) //removes properties with null or undefined values
      //merge restrictSearch in if it there
      if(ds.restrictSearch) {
        params.q = {...params.q, ...ds.restrictSearch}
      }
      //save it before we stringify
      // ds.stores.setQuery(params)

      return ds.stringifyQuery(params)
    },

    stringifyQuery(params){
      let { q, sort, projections } = params
      if(q) params.q = stringify(q)
      if(projections) params.projections = stringify(projections)
      //stringify sort and remove the quotes and brackets
      if(sort) params.sort = stringify(sort).replace(/{|}|"/g, '')
      return params
    }

  })

}
