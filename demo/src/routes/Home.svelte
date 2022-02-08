<script>
  import { Counter } from '@yakit/ui'
  import logo from '../assets/yak.svg'
</script>

<main class="text-center p-4 mx-0">
  <img src={logo} alt="Svelte Logo" class="inline-block" />
  <h1 class="text-6xl uppercase font-thin leading-tight my-8 mx-auto max-w-xs sm:max-w-xs">Hello</h1>
  <Counter />
</main>

<p>
  This sample shows how to set up the router with minimum functionality. <br />
  The route definition object contains a number of routes (including some with parameters and a catch-all at the end).<br
  />
  The links below allow navigating between pages.
</p>

<p>This is the Home component, which contains markup only.</p>

<p><em>Hint:</em> Try navigating with the links below, then use your browser's back and forward buttons.</p>
