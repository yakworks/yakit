<!--  svelte-ignore a11y-invalid-attribute-->
<script>
  import { App, View, Page, Navbar,BlockTitle, Toolbar, Link,
  List, ListItem, AccordionContent, Block  } from 'framework7-svelte';
  import { onMount } from 'svelte';
  import { app, f7, f7ready } from 'framework7-svelte/esm/shared/f7';
  // import { app } from '../framework7';
  import Router from 'svelte-spa-router'
  // Import the list of routes
  import routes from './routes'
  import SideNav from './SideNav.svelte'
  const f7params = {
    // Array with app routes
    // routes,
    // App Name
    el: '#app',
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    init: true,
    // ...
  };

  onMount(() => {
    f7ready(() => {
      // Framework7 initialized
      app.f7.dialog.alert('Component mounted');
    })
  })
</script>
<App {...f7params}>
<Page>
  <Navbar title="Accordion" />
  <BlockTitle>List View Accordion</BlockTitle>
  <List accordionList>
      <ListItem accordionItem title="Lorem Ipsum" opened={true}>
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
<!-- <SideNav/> -->
</Page>
</App>

<style lang="scss">
</style>

