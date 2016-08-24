import $ from 'jquery';
export ForJQ from './ForJQ.js';
export ForReact from './ForReact.js';
export ForH5 from './ForH5.js';
if(typeof(ForJQ) == 'undefined'){
    window.ForJQ = exports['ForJQ'];
}
$.fn.extend({
    ForJQ:function(opt){
        new ForJQ(opt,this);
        return this;
    }
});
