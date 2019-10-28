window.$ = require('jquery');
require('lazyloadxt/dist/jquery.lazyloadxt');
require('lazyloadxt/dist/jquery.lazyloadxt.bg');

$(document).ready(function() {

require('./buttons');
require('./modal');
require('./form');
let toggler = require('./toggler');
toggler($('.nav-toggler'), $('.nav-menu'));

})
