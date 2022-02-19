<script>
  import {
    Page, Navbar
  } from 'framework7-svelte';
  import { onMount } from 'svelte';

</script>

<Page class="page-home">
  <Navbar title="Home" backLink="Back" />
  {#each Array(100) as _, i}
    <li>{i + 1}</li>
  {/each}
</Page>
