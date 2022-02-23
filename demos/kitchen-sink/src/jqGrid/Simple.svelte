<script>
  import { Navbar, Page, Block} from 'framework7-svelte';
  import { JqGrid } from '@yakit/ui/svelte/DataList'
  import sessionStores from '../store/sessionServices'
  import QuickFilter from './QuickFilter.svelte'
  import Resource from '@yakit/core/stores/Resource';

  // let dataApi = dataApiFactory
  let dataApi = sessionStores.invoice
  console.log("dataApi", dataApi)

  let gridOptions = {
    colModel: [
      { name: 'id', label: 'id', width: 20, sorttype: 'int', align: 'right' },
      { name: 'customer.id', label: 'CustomerId', hidden: true },
      { name: 'customer.name', label: 'Customer', formatter: 'editPopoverLink' },
      { name: 'state.name', label: 'State' },
      { name: 'amount', label: 'Amount', width: 80, formatter: 'currency' },
      { name: 'comments', label: 'Comments' },
      { name: 'hasTax', label: 'Taxable', width: 60, align: 'center', formatter: 'okIcon' } // formatter: 'okIcon' }
    ],
    sortname: 'id',
    shrinkToFit: true,
    contextMenu: true,
    pager: true,
    gridId: 'someGrid'
  }

  let editForm = {
    'customer.name':{ required: true },
    // state:{
    //   input: 'select',
    //   selectOptions:{
    //     isValueObject: true,
    //     data:[{id:0, name: 'Open'}, {id:1, name: 'Closed'}]
    //   }
    // },
    // refnum:{ required: true },
    // amount:{ type: 'number', required: true, multipleOf: 0.01 },
    // hasTax:{ type: 'boolean' }
  }

  let searchForm = {
    column1:{
      'refnum':{
        input: 'chips'
      },
      'date':{
        label: "Date Range",
        input: 'date-range'
      }
    },
    column2:{
      'amount':{
        label: "Amount Range",
        type: "number",
        input: 'amount-range'
      },
      state:{
        input: 'select',
        options:{
          isMulti: false,
          isValueObject: true,
          data:[{id:0, name: 'Open'}, {id:1, name: 'Closed'}]
        }
      }
    },
    column3:{
      customer:{
        input: 'select',
        options:{
          dataApi:{
            key:'customer'
          }
        }
      },
    }
  }

  let ctx = { gridOptions, editForm }
  // let ctx = { gridOptions, listId: 'simple' }
  //local, not export so not exposed
  // let dataApi = sessionStores.invoice
  // let resource = Resource({dataApi})

  let resource = Resource({ dataApi })
  //this gets called during load config, so we override it so it doesn't do it
  resource.ident = () => 'simple'
  resource.setConfig({gridOptions})

</script>

<Page>
  <Navbar sliding backLink title="Badge"/>

  <Block>
    <JqGrid {resource} {ctx} {QuickFilter} />
  </Block>
</Page>
