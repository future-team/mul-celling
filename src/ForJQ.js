/**
 * jquery 适用
 * */
import $ from 'jquery';
import CellMixin from './utils/CellMixin.js';
import '../css/cell-jq.less';
import options from './utils/options.js';
import difClass from './utils/className.js';
@CellMixin
class ForJQ {
    constructor(opts = {}) {
        this.opts = $.extend({}, options, opts);
        this.root = $(this.opts.root);
        this.className = this.getCName(this.opts.position);
        this.switchPos();
    }
    /**
     * 判断是否middle
     * */
    switchPos() {
        this.isMiddle(this.opts.position)?this.addEvent():this.addFix();
    }

    addFix() {
        this.addClass(this.root[0],this.className);
    }
    removeFix(){
        this.removeClass(this.root[0],this.className);
    }
    /**
     * addEvent
     * */
    addEvent() {
        let deTop = this.getDTop(this.root[0]);
        this.isReset = true;
        $(window).on('scroll', ()=>{
           if ($(window).scrollTop()>= deTop) {
               this.isReset && this.addFix();
               this.isReset && (this.isReset =false);
           }else{
               !this.isReset && this.removeFix();
               !this.isReset && (this.isReset = true);
            }
        })
    }
}
if(typeof(ForJQ) == 'undefined'){
    window.ForJQ = exports['ForJQ'];
}
$.fn.extend({
    ForJQ:function(opt){
        new ForJQ(opt,this);
        return this;
    }
});
module.exports = ForJQ;