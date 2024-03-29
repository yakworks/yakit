[![npm](https://img.shields.io/npm/v/svelte-data-grid.svg?style=flat-square)](https://npmjs.org/package/svelte-data-grid)
# Svelte Data Grid, slightly enhanced

This is a fork of [gamalielmendez's fork](https://github.com/gamalielmendez/svelte-data-grid)
of [svelte-data-grid](https://github.com/bsssshhhhhhh/svelte-data-grid).

gamalielmendez's fork added:
- Infinite scroll
- Ability to select row
- Move selection cursor with mouse wheel
- Changecursor event
- Move cursor with the keyboard arrows
- Striped rows

This fork added/fixed:
- Render "" instead of "undefined" if no data
- Changed `on:change` to `on:blur` per warning message
- Added `tableWidth` prop, allow last column to have auto width (overriding width settings for last col)
- Fixed input loses focus
- Added debounce
- Fixed dispatch
- Added `align` col config
- Added `headerAlign` col config to override default header cell 'center' text-align
- Lighter border colors
- Added update handlers `onCellUpdate` and `onHeaderUpdate` (see usage below)
- Added cell event handlers `onClickCell`, `onMouseEnterCell`, and `onMouseLeaveCell` (see usage below)

## [Demo](https://bsssshhhhhhh.github.io/svelte-data-grid-demo/)
### [Demo repo](https://github.com/bsssshhhhhhh/svelte-data-grid-demo)

Svelte Data Grid is a svelte v3 component for displaying and editing any amount of data.

## Features:
 - Excellent scrolling performance
 - ARIA attributes set on elements
 - Lightweight even when displaying a huge dataset due to implementation of a "virtual list" mechanism
 - Column headers remain fixed at the top of the grid
 - Custom components can be specified to control how individual table cells or column headers are displayed
 - Columns can be resized and reordered

## Current Limitations:
 - Every row must have the same height and text cannot break onto the next line

## Install:

To install this fork, replace `x.y` with the latest in [releases](https://github.com/fuzzthink/svelte-data-grid/releases)
```cs
npm install -D https://github.com/fuzzthink/svelte-data-grid/tarball/v1.x.y
yarn add -D https://github.com/fuzzthink/svelte-data-grid/tarball/v1.x.y
```

## Usage:
Within a svelte component:
```js
import DataGrid from "svelte-data-grid";
<DataGrid rows={myRows} allowColumnReordering={false} columns={myColumnDefinitions} on:columnOrderUpdated={saveNewColumnOrder}>
```

Outside of svelte:
```js
import DataGrid from "svelte-data-grid";
const grid = new DataGrid({
  target: document.querySelector('#my-grid-wrapper'),
  data: {
    rows: [ ... ],
    columns: [ ... ],
    allowResizeFromTableCells: true
  }
});

grid.$on('columnOrderUpdated', () => {
  const { columns } = grid.get();
  // save new column  order
});
```

To learn more about using DataGrid outside of svelte, read [svelte's guide](https://svelte.dev/docs#Client-side_component_API) on how to interact with a svelte component. It is possible to integrate into any framework.

DataGrid requires 2 properties to be passed in order to display data: `rows` and `columns`.

`columns` is an array of objects containing at least 3 properties: `display`, `dataName`, and `width`. A svelte component can be specified in `headerComponent` and `cellComponent` if any custom cell behavior is required.

```js
[
  {
    display: 'Fruit Name',  // What will be displayed as the column header
    dataName: 'fruitName',  // The key of a row to get the column's data from
    width: 300,             // Width, in pixels, of column
    disallowResize: true    // Optional - disables resizing this column
  },
  {
    display: 'Color',
    dataName: 'fruitColor',
    width: 600,
    myExtraData: 12345
  }
]
```


`rows` is an array of objects containing the data for each table row.

```js
[
  {
    fruitName: 'Apple',
    fruitColor: 'Red'
  },
  {
    fruitName: 'Blueberry',
    fruitColor: 'Blue'
  },
  {
    fruitName: 'Tomato',
    fruitColor: 'Red'
  }
]

```

## Editing Data

Version 2 added early support for editing data. Due to the lack of using a keyed each block to render the rows, maintaining focus on controls as the user scrolls is a tad wonky. This will be resolved in a future version.

Import the components:
```js
import TextboxCell from 'svelte-data-grid/src/textbox-cell.svelte';
import SelectCell from 'svelte-data-grid/src/select-cell.svelte';
import CheckboxCell from 'svelte-data-grid/src/checkbox-cell.svelte';
```

### Textbox Cell
Textbox cell will debounce the user input, only recording changes after 400ms has elapsed since the user stops typing.
```js
{
  display: 'Name',
  dataName: 'name',
  width: 250,
  cellComponent: TextboxCell
}
```

### Select Cell

SelectCell requires that you provide an `options` array in your cell definition:
```js
{
  display: 'Eye Color',
  dataName: 'eyeColor',
  width: 75,
  cellComponent: SelectCell,
  options: [
    {
      display: 'Green',
      value: 'green'
    },
    {
      display: 'Blue',
      value: 'blue'
    },
    {
      display: 'Brown',
      value: 'brown'
    }
  ]
}
```

### Checkbox Cell
CheckboxCell will set the checked state of the checkbox depending on the boolean value of the row's data.
```js
{
  display: 'Active',
  dataName: 'isActive',
  width: 75,
  cellComponent: CheckboxCell
}
```


## Custom Cell Components

Need to customize how your data is displayed or build more complex functionality into your grid? Specify `cellComponent` in your definition in the `columns` property.

Components will be passed the following properties:
- `rowNumber` - The index of the row within `rows`
- `row` - The entire row object from `rows`
- `column` - The entire column object from `columns`


MyCustomCell.svelte
```js
<script>
export let data = {
  colors: {
    Red: '#FF0000',
    Blue: '#0000FF'
  }
};
</script>

<div style="color: {colors[row.data[column.dataName]] || 'black'};">
  {row.data[column.dataName]}
</div>
```

Import the component
```js
import MyCustomCell from './MyCustomCell.svelte';
```

`columns` option:
```js
[
  {
    display: 'Fruit Color'
    dataName: 'fruitColor',
    width: 300,
    cellComponent: MyCustomCell
  }
]
```

## Custom Header Components
Header components can also be specified in `columns` entries as the `headerComponent` property. Header components are only passed `column`, the column object from `columns`.

## onClickCell, onMouseEnterCell, onMouseLeaveCell

You can pass these handlers to handle mouse on cell events. The params are all: (value, columnName, iRow, iCol)

## onCellUpdate, onHeaderUpdate

`on:valueUpdated={handler}` doesn't seem to work for me (at least not for textbox-cell, `event.*` were all `undefined`).
Thus, `onCellUpdate` callback is added for cell updates.

Likewise,`onHeaderUpdate` callback is added for custom events trigger on a custom header column. Eg.

MyCustomHeaderCol.svelte
```svelte
<script>
  export function onUpdate(action) {
    dispatch('update', {
      action,
    })
  }
</script>

<i on:click={evt => onUpdate('someAction')}>
```

MyCustomHeaderCol.svelte
```svelte
<script>
  $: columns = [ ...otherCols,
    { headerComponent: MyCustomHeaderCol, disallowResize: true },
  ]
  const onCellUpdate = (event) => {
    const { rowNumber, value } = event.detail
  }
  const onHeaderUpdate = (event) => {
    const { action } = event.detail
  }
</script>
<DataGrid {rows} {columns} {...props} {tableWidth}
  {onHeaderUpdate}
  {onCellUpdate}
/>
```

## Options:

Svelte Data Grid provides a few options for controlling the grid and its interactions:

- `rowHeight` - The row height in pixels *(Default: 24)*
- `allowResizeFromTableCells` - Allow user to click and drag the right border of a table cell to resize the column *(Default: false)*
- `allowResizeFromTableHeaders` - Allow user to click and drag the right border of a column header to resize the column *(Default: true)*
- `allowColumnReordering` - Allow user to drag a column header to move that column to a new position *(Default: true)*
- `allowColumnAffix` - Allow user to drag the double line to affix columns to the left side of the grid. See section below for caveats *(Default: true if the browser is chrome, false otherwise)*
- `__extraRows` - If it is desired that the virtual list include more DOM rows than are visible, the number of extra rows can be specified in `__extraRows` *(Default: 0)*
- `__columnHeaderResizeCaptureWidth` The width of the element, in pixels, placed at the right border of a column that triggers that column's resize. *(Default: 20)*


## Events:
 - `columnOrderUpdated` - Fired when the user has dragged a column to a new position. The updated column order can be accessed from `component.get().columns`
 - `columnWidthUpdated` - Fired when a user has resized a column. The updated column width can be accessed from `event.width` and the column index can be accessed from `event.idx`

## Column Affixing

This feature works well on Chrome because Chrome's scroll events are not fired asynchronously from the scroll action. Firefox, Edge, and IE all fire scroll events *after* the overflow container has scroll on screen. This causes a jittery effect that we cannot easily work around while providing a cross-browser solution.

To fix the jitteriness on Firefox, a setting in about:config can be changed to turn off APZ. Set `layers.async-pan-zoom.enabled` to `false`. Obviously this is not a solution we can reasonably ask users to try, so I'm looking for other solutions.

## Bugs? Suggestions?
Feedback is always appreciated. Feel free to open a GitHub issue if DataGrid doesn't work the way you expect or want it to.
