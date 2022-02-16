<!--  svelte-ignore a11y-invalid-attribute-->
<script>
  // import Router from 'svelte-spa-router'
  // Import the list of routes
  // import routes from './routes'
  import logoUrl from "./assets/logos/yak-white.svg"
  // import {List, ListItem, AccordionContent, Block  } from "@yakit/svelte"
  import {List, ListItem, AccordionContent, Block  } from 'framework7-svelte';
</script>

<nav class="sidenav is-active">
  <div class="sidenav-header">
    <button class="hamburger hamburger-arrow-left is-active">
      <i></i>
    </button>
    <img class="logo" src={logoUrl}>
    <button title="toggle fixed side menu" class="icon tack is-fixed">
      <i class="material-icons"> push_pin</i>
    </button>
  </div>
  <div class="sidenav-nav sidenav-list">
    <ul class="sidenav-menu list-item-set">
      <li class="list-item">
        <a href="/#/rcm/dashboard" class="item-content nav" >
          <span class="icon">
            <i class="material-icons">insights</i>
          </span>
          <span class="item-title"> Dashboard </span>
        </a>
      </li>
    </ul>
    <List accordionList>
    <ListItem accordionItem title="Lorem Ipsum">
      <AccordionContent>
        <Block>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.
          </p>
        </Block>
      </AccordionContent>
    </ListItem>
    <ListItem accordionItem title="Nested List">
      <AccordionContent>
        <List>
          <ListItem title="Item 1"></ListItem>
          <ListItem title="Item 2"></ListItem>
          <ListItem title="Item 3"></ListItem>
          <ListItem title="Item 4"></ListItem>
        </List>
      </AccordionContent>
    </ListItem>
    </List>
  </div>
</nav>
<style lang="scss">
</style>
