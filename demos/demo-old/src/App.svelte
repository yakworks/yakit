<!--  svelte-ignore a11y-invalid-attribute-->
<script>
  // import {App } from "@yakit/svelte"
  // import Router from 'svelte-spa-router'
  // // Import the list of routes
  // import routes from './routes'
  import SideNav from './SideNav.svelte'
  // import { onMount } from 'svelte';
  // import { f7, f7ready } from 'framework7-svelte/esm/shared/f7';
  // import logoUrl from "./assets/logos/yak-white.svg"
  // import {List, ListItem, AccordionContent, Block  } from "@yakit/svelte"

  // onMount(() => {
  //   f7ready(() => {
  //     // Framework7 initialized
  //     // f7.dialog.alert('Component mounted');
  //   })
  // })

</script>


<SideNav/>

<div class="relative min-h-screen md:flex">
  <!-- mobile menu bar -->
  <div class="bg-gray-800 text-gray-100 flex justify-between md:hidden">
    <!-- logo -->
    <a href="#" class="block p-4 text-white font-bold">Better Dev</a>
  </div>

  <!-- sidebar -->
  <div
    class="sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"
  >
    <!-- nav -->
    <nav>
      <a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
        Home
      </a>
      <a
        href="#/hello/svelte"
        class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
      >
        Say Hi
      </a>
      <a href="#/grid" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
        Grid
      </a>
      <a
        href="#/wild/card"
        class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
      >
        Features
      </a>
      <a
        href="#/does/not/exist"
        class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
      >
        Not Found
      </a>
    </nav>
  </div>

  <!-- content -->
  <!-- <div class="flex-1 m-4">
    <Router {routes} />
  </div> -->
</div>


<style lang="scss">
</style>
