<script>
import {DataGrid, TextboxCell, SelectCell, CheckboxCell} from '@yakit/grid'
import data from './dataset.json'

let rowHeight = 24
let rows = [{"id": 1, name: 'Billy', num: '123'}, {"id": 2, name: 'Sally', num: '234'}]
let columns = [
  {
    display: 'Row #',
    dataName: 'id',
    width: 60
  },
  {
    display: 'Name',
    dataName: 'name',
    width: 250
  },
  {
    display: 'Num',
    dataName: 'num',
    width: 100
  }
]
</script>

<div class="header">
	<h1>Grids</h1>
</div>

<div class="grid-wrap">

  <DataGrid rows={data} {columns} bind:rowHeight />

</div>

<style>

:global(*) {
	box-sizing: border-box;
}

.header {
	text-align: center;
}

.controls {
	width: 40%;
	margin: 2em auto;
}
.grid-wrap {
	width: 70%;
	margin: 0 auto;
	Height: calc(100vh - 300px);
	border: 1px solid black;
}

</style>
