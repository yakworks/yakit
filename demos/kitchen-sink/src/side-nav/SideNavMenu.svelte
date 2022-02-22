<script>
  import { f7, f7ready, theme, Page,
    Navbar, List, ListItem, AccordionContent, Block, BlockTitle, Icon, Button, View} from 'framework7-svelte';
  import BlockTitleIcon from './BlockTitleIcon.svelte'
  import { onMount } from 'svelte';
  import routes from '../routes';

  // export let f7router;

  const onPageAfterIn = () => {
    if (!theme.aurora) return;
    if (f7.width >= 768) {
      // f7router.navigate('/about/', { reloadDetail: true });
    }
  };

  // onMount(() => {
  //   console.log('routes', routes)
  // });

</script>

<Page class="page-sidenav" {onPageAfterIn}>
  <Navbar title="YakWorks" />

  <div class="menu-lists">

    <List>
      <ListItem class="header" accordionItem accordionItemOpened={true} title="Pages" >
        <Icon slot="media" f7="house" />
        <AccordionContent>
          <List menuList noHairlinesBetween>
            <ListItem title="Home" link="/" >
              <i class="icon icon-blank" slot="media" />
            </ListItem>
            <ListItem title="About" link="/about">
              <i class="icon icon-blank" slot="media" />
            </ListItem>
          </List>
        </AccordionContent>
      </ListItem>
    </List>

    <List>
      <ListItem class="header" accordionItem accordionItemOpened={true} title="Grids" >
        <Icon slot="media" material="table" />
        <AccordionContent>
          <List menuList noHairlinesBetween>
            <ListItem title="Simple" link="/simple-grid" >
              <i class="icon icon-blank" slot="media" />
            </ListItem>
            <ListItem title="About" link="/about">
              <i class="icon icon-blank" slot="media" />
            </ListItem>
          </List>
        </AccordionContent>
      </ListItem>
    </List>

    <List>
      <ListItem class="header" accordionItem accordionItemOpened={true} title="Components" >
        <Icon slot="media" f7="wrench" />
        <AccordionContent>
          <List menuList noHairlinesBetween>
            {#each routes as item}
              {#if item.isMenuItem != false}
                <ListItem link={item.link || item.path} title={item.name || (item.component ? item.component.name : '')}>
                  <i class="icon blank" slot="media" />
                </ListItem>
              {/if}
            {/each}
          </List>
        </AccordionContent>
      </ListItem>
    </List>

  </div>

  <BlockTitleIcon title="pages">
    <Icon f7="house"/>
  </BlockTitleIcon>
  <List menuList noHairlines>
    <ListItem title="Home" link="/" >
      <i class="icon icon-blank" slot="media" />
    </ListItem>
    <ListItem title="About" link="/about">
      <i class="icon icon-blank" slot="media" />
    </ListItem>
  </List>

</Page>

<style>

:global(.menu-list) {
  --f7-list-item-title-font-size: 16px;
}

/* :global(.page-sidenav) {
  --f7-page-bg-color: hsl(0, 0%, 99%);
} */

.menu-lists :global(.header.item-content) {
  --f7-list-item-title-font-size: 13px;
  text-transform: uppercase;
  font-weight: 600;
  /* font-size: var(--f7-block-header-font-size); */
  color: var(--f7-block-header-text-color);
}
</style>
