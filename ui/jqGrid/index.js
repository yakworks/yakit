// SEE THE INDEX>HTML, WE IMPORT DIRECTLY THERE since we were crashing and burning.
// import jQuery from 'jquery';
// import * as jQuery from 'jquery/dist/jquery.js'
// export for others scripts to use
// window.$ = jQuery;
// window.jQuery = jQuery;

//order below is important
// import 'free-jqgrid/js/jquery.jqgrid.src'

// import 'jquery-ui/ui/core'
// import 'jquery-ui/ui/jquery-patch'
// import 'jquery-ui/ui/widget'
// import 'jquery-ui/ui/plugin'
// import 'jquery-ui/ui/widgets/mouse'
// import 'jquery-ui/ui/widgets/draggable'
// import 'jquery-ui/ui/widgets/sortable'
// import 'jquery-ui/ui/widgets/droppable'

import './jq.gridz'
import './jq.formatters'

export { default as JqGridCtrl } from './JqGridCtrl'
