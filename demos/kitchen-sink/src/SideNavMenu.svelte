<script>
  import { f7,f7ready, theme, Page,
    Navbar, NavRight, NavLeft, NavTitle, NavTitleLarge, Searchbar, BlockTitle,
    List,ListItem,Link,AccordionContent,Block,Icon,Button, View} from 'framework7-svelte';
  import { onMount } from 'svelte';
  import routes from './routes';

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

<Page class="page-home" {onPageAfterIn}>
  <Navbar title="YakWorks" />

  <div class="block-header">Pages</div>
  <List menuList>
    <ListItem title="Pages" class="header" >
      <span slot="media">
        <Icon md="material:home" aurora="f7:house" ios="f7:house_fill" />
      </span>
    </ListItem>
    <ListItem title="Home" link="/" >
      <i class="icon icon-blank" slot="media" />
    </ListItem>
    <ListItem title="About" link="/about">
      <i class="icon icon-blank" slot="media" />
    </ListItem>
  </List>

  <div class="block-header">Components</div>
  <List menuList>
    {#each routes as item}
      {#if item.isMenuItem != false}
        <ListItem link={item.link || item.path} title={item.name || (item.component ? item.component.name : '')}>
          <i class="icon icon-f7" slot="media" />
        </ListItem>
      {/if}
    {/each}
  </List>
</Page>

<style>

:global(.menu-list) {
  --f7-list-item-title-font-size: 16px;
}

:global(li.header) {
  --f7-list-item-title-font-size: 13px;
  text-transform: uppercase;
  font-weight: 600;
  /* font-size: var(--f7-block-header-font-size); */
  color: var(--f7-block-header-text-color);
  margin-left: var(--f7-menu-list-offset);
  margin-right: var(--f7-menu-list-offset);
}
</style>
