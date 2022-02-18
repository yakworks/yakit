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
    Icon,
    Button

  } from 'framework7-svelte';
  import { onMount } from 'svelte';

  // export let f7router;

  function toggleSideNavClasses(){
    let _html = document.body.parentElement
    _html.classList.toggle("side-nav-open")
    _html.classList.toggle("side-nav-closed")
  }
</script>

<div class="burger">
  <Button  iconF7="sidebar_left" on:click={ toggleSideNavClasses }/>
</div>
<aside class="side-nav">
  <Navbar large transparent title="YakWorks" >

    <NavRight>
      <Link
        searchbarEnable=".searchbar-components"
        iconIos="f7:search"
        iconAurora="f7:search"
        iconMd="material:search"
      />
    </NavRight>
    <Searchbar
      class="searchbar-components"
      searchContainer=".components-list"
      searchIn="a"
      expandable
      disableButton={!theme.aurora}
    />
  </Navbar>

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
</aside>

<style>

aside.side-nav{
  /* 12em is the width of the sidebars */
  flex: 0 0 256px;
  transition: margin 0.3s ease;
  overflow-y: auto;
  margin-left: -256px;
  width: 256px;
  --f7-safe-area-right: 0px;
  --f7-safe-area-outer-right: 0px;
  border-right: var(--f7-page-master-border-width) solid var(--f7-page-master-border-color);
}

:global(.side-nav-open) aside.side-nav {
  margin-left: 0;
}

.burger :global(.button) {
  top: 0 !important;
  position: fixed;
  top: 1em;
  left: 4px;
  z-index: 10000;
  height: calc(var(--f7-navbar-height) + var(--f7-safe-area-top));
  /* height: var(--f7-navbar-link-height); */
}

/* make space for the burger */
:global(.side-nav-closed .navbar-inner) {
  padding-left: 52px;
}
</style>
