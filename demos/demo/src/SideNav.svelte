<script>
  import { f7, theme, Navbar, NavRight,List,ListItem,Link,AccordionContent,Block,Icon,Button} from 'framework7-svelte';
  import { onMount } from 'svelte';
  import {link} from 'svelte-spa-router'

  // export let f7router;

  function toggleSideNavClasses(){
    let _html = document.body.parentElement
    _html.classList.toggle("side-nav-open")
    _html.classList.toggle("side-nav-closed")
  }

  const onResize = () => {
    const $el = f7.$('.page-home');
    if (f7.width >= 768) {
      $el.find('.list:not(.searchbar-not-found)').addClass('menu-list');
    } else {
      $el.find('.list:not(.searchbar-not-found)').removeClass('menu-list');
    }
  };

  onMount(() => {
    if (theme.aurora) {
      const $el = f7.$('.page-home');
      //run it first on mount
      onResize();
      //then listen
      f7.on('resize', onResize);

      // f7router.on('routeChange', (route) => {
      //   const url = route.url;
      //   if (!$el) return;
      //   const $linkEl = $el.find(`a[href="${url}"]`);
      //   if (!$linkEl.length) return;
      //   $el.find('.item-selected').removeClass('item-selected');
      //   $linkEl.addClass('item-selected');
      // });
    }
  });
</script>

<div class="burger">
  <Button  iconF7="sidebar_left" on:click={ toggleSideNavClasses }/>
</div>
<aside class="side-nav">
  <Navbar title="YakWorks" >
    <NavRight>
      <Link
        icon="f7:push_pin"
      />
    </NavRight>
  </Navbar>
  <!-- <p>foo</p> -->
  <!--page-content give us padding for the navbar and div allows us to style here  -->
  <div class="nav-content page-content">
    <List class="menu-list mt-0" noHairlines accordionList>
      <ListItem title="About Framework7" link="#/about" >
        <span slot="media">
          <Icon md="material:home" aurora="f7:house" ios="f7:house_fill" />
        </span>

      </ListItem>
      <ListItem link="#/accordion" title="Accordion">
        <i class="icon material-icons" slot="media">dashboard</i>
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
            </ul>
          </li>
        </AccordionContent>
      </ListItem>
    </List>

  </div>
</aside>

<style>

:global(aside.side-nav) {
  --side-nav-width: 256px:
}
aside.side-nav{
  flex: 0 0 var(--side-nav-width);
  transition: margin 0.3s ease;
  /* overflow-y: auto; */
  margin-left: -256px;
  width: 256px;
  --f7-safe-area-right: 0px;
  --f7-safe-area-outer-right: 0px;
  border-right: var(--f7-page-master-border-width) solid var(--f7-page-master-border-color);
  position: static;
}

aside.side-nav :global(.navbar){
  width: 256px;
  /* border-right: var(--f7-page-master-border-width) solid var(--f7-page-master-border-color); */
}
aside.side-nav :global(.navbar .navbar-inner){
  padding: 0;
  /* border-right: var(--f7-page-master-border-width) solid var(--f7-page-master-border-color); */
}

.nav-content {
  padding-top: 0;
}
.nav-content :global(.menu-list){
  --menu-list-offset: 4px;
  --f7-list-font-size: 16px;
  --f7-list-margin-vertical: 8px;
  --f7-list-item-title-font-size: 16px;
  padding-top: 0;
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
