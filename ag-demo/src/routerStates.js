import svelteStates from './svelte/routes'
import svelteDataListStates from './svelteDataList/routes'
import svelteSelectStates from './svelteSelects/routes'
import formifyRoutes from './formify/routes'

const levelStates = {
  name: 'levels',
  abstract: true,
  template: '<div ui-view class="fade-in-up"></div>',
  data: {
    icon: 'fas fa-plug '
  },
  children: [
    {
      name: 'Foo Fuzz',
      children: [
        {
          name: 'level3a',
          data: {
            title: 'Foo Bar Baz Buzz Boogaloo'
          },
          template: '<h4>level3a</h4>'
        },
        {
          name: 'level3b',
          template: '<h4>level3b</h4>'
        }
      ]
    },
    {
      name: 'Bar Bazz',
      children: [
        {
          name: 'level3c',
          data: {
            title: 'Bar Bazz Boogaloo'
          },
          template: '<h4>level3c</h4>'
        },
        {
          name: 'level3d',
          template: '<h4>level3d</h4>'
        }
      ]
    }
  ]
}

export const fresh = {
  name: 'fresh',
  url: '/fresh',
  component: 'freshApp',
  abstract: true,
  children: [svelteStates, svelteDataListStates, svelteSelectStates, formifyRoutes, levelStates]
}

export default { fresh }
// export default appRoot
