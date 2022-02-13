import jQuery from 'jquery';
// export for others scripts to use
window.$ = jQuery;
window.jQuery = jQuery;

//order below is important
import 'free-jqgrid/js/jquery.jqgrid.src'

import 'jquery-ui/ui/widgets/draggable'
import 'jquery-ui/ui/widgets/sortable'
import 'jquery-ui/ui/widgets/droppable'

import './jq.gridz'
import './jq.formatters'

export { default as JqGridCtrl } from './JqGridCtrl'
