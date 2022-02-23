<!--
  Wraps the jqGrid and adds the toolbar and search form
 -->
<script>
  import { onMount, createEventDispatcher } from 'svelte'
  import {writable} from 'svelte/store';
  import { app, f7 } from 'framework7-svelte';
  import { searchDefaults } from '@yakit/core/schema/transformSchema'
  import { _defaults } from '@yakit/core/dash'
  import { CardFooter, Button} from 'framework7-svelte'
  import { Columns, Col} from '../index'
  import { Formify, problemHandler } from '../Formify'
  import stringify from '@yakit/core/stringify';

  /** the resource with stores to bind to*/
  export let resource = undefined
  /** the schema to use to build the form */
  export let schema
  /** dataApi to call save on */
  // export let dataApi
  /** the base list id that will be used to construct the popoverId and the form name */
  export let listId
  /** options to pass to form */
  export let formOpts = {}
  /** form name constructed from the listId */
  export let formName = `${listId}-search-form`
  /** the formify context, can bind to it and get its state*/
  export let formContext = undefined
  /** bind to this to get the searching status, its bound to formContext.isSubmitting*/
  export let isSearching = undefined

  export let data = undefined

  const dispatch = createEventDispatcher()

  let formClass = 'mb-4'

  let accOpened

  let q = resource.q

  $: showSearchForm  = $resource.showSearchForm

  $: if(showSearchForm){
    app.f7.accordion.open("#searchAccordian")
  } else {
    // app.f7.accordion.close("#searchAccordian")
    try{
      app.f7.accordion.close("#searchAccordian")
    } catch(e){ /* empty */ }
  }

  $: if(showSearchForm){
    formContext.updateInitialValues($q)
  }

  _defaults(formOpts, {
    validate: false,
    async onSubmit(values, form, errors){
      try {
        dispatch('search', values)
        $resource.showSearchForm = false
      } catch (er) {
        problemHandler.handleError(er)
      }
    }
  })

  export let onCancel = (event) => {
    // document.forms[name].reset()
    formContext.handleReset()

  }

  export let onSearch = async (event) => {
    formContext.handleSubmit()
  }

  // setup isMulti defaults for selects
  export let onTransformedSchema = (schema) => {
    searchDefaults(schema)
  }

  onMount( () => {
    // let popper = popoverEl.instance()
    // popper.open("#fooey")
    // app.f7.tab.show('#contactsTab', true)
	});

  $: isSearching = formContext ? formContext.isSubmitting : writable(false)

  // let data = {}
  let state
  $: if(formContext) {
    state = formContext.state
  }
</script>

<div class="accordion-item" id="searchAccordian">
  <div class="accordion-item-content">
    <Formify class={formClass} name={formName} opts={formOpts} {schema} {onTransformedSchema}
      bind:data bind:formContext >
      <CardFooter class="right" slot="footer">
        <Button onClick={onCancel} class="mr-4">Reset</Button>
        <Button color="primary" loading={$isSearching} onClick={onSearch}>Search</Button>
      </CardFooter>
    </Formify>
    <!-- <Columns>
      <Col class="is-4">
        <pre class="mt-4">field model: {stringify(data, null, 2)}</pre>
      </Col>
      <Col class="is-4">
        <pre class="mt-4">state: {stringify($state, null, 2)}</pre>
      </Col>
    </Columns> -->
  </div>
</div>

<style>
  .accordion-item {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    margin-top: -0.75rem;
  }
  .accordion-item-content {
    padding-left: .75rem;
    padding-right: .75rem;
    padding-top: .75rem;
  }
</style>



