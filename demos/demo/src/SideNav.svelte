<script>
  import {
    f7,
    theme,
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    BlockTitle,
    List,
    ListItem,
    Link,
    Searchbar,
    AccordionContent,
    Block,
    Icon

  } from 'framework7-svelte';
  import { onMount } from 'svelte';

  // export let f7router;

</script>

  <List class="searchbar-hide-on-search">
    <ListItem title="About Framework7" reloadDetail={theme.aurora} link="/about/">
      <i class="icon icon-f7" slot="media" />
    </ListItem>
  </List>

  <List accordionList>
    <ListItem accordionItem title="Lorem Ipsum">
      <Icon slot="media" material="power" />
      <AccordionContent>
        <Block>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec</p>
        </Block>
      </AccordionContent>
    </ListItem>
    <ListItem accordionItem title="Nested List">
      <Icon slot="media" material="power" />
      <AccordionContent>
        <li>
          <ul>

              <ListItem title="Item 1" link>
                <i class="icon-empty" slot="media" />
              </ListItem>
              <ListItem title="Item 2" mediaItem={true} link />
              <ListItem title="Item 3" link />
              <ListItem title="Item 4" link />

          </ul>
        </li>
      </AccordionContent>
    </ListItem>
    </List>

  <BlockTitle medium class="searchbar-found">Components</BlockTitle>
  <List class="components-list searchbar-found">
    <ListItem link="/#/accordion/" title="Accordion">
      <i class="icon icon-f7" slot="media" />
    </ListItem>
    <ListItem link="/action-sheet/" title="Action Sheet">
      <i class="icon icon-f7" slot="media" />
    </ListItem>
    <ListItem link="/appbar/" title="Appbar">
      <i class="icon icon-f7" slot="media" />
    </ListItem>
    <ListItem link="/panel/" title="Panel / Side Panels">
      <i class="icon icon-f7" slot="media" />
    </ListItem>
    <ListItem link="/tabs-routable/" title="Tabs Routable">
      <i class="icon icon-f7" slot="media" />
    </ListItem>
  </List>
