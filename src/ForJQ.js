/**
 * jquery 适用
 * */
import $ from 'jquery';
import CellMixin from './CellMixin.js';
import '../css/cell-jq.less';
import options from './options.js';
import difClass from './className.js';
@CellMixin
export default
class ForJQ {
    constructor(opts = {}) {
        this.opts = $.extend({}, options, opts);
        this.root = $(this.opts.root);
        //测试minx方法
        this.test();
        this.className = this.getCName(this.opts.position);
        this.switchPos();
    }
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
     * 重写addEvent方法
     * */
    addEvent() {
        this.getDefaultStyle();
        this.isReset = true;
        $(window).on('scroll',  ()=>{
            console.log($(window).scrollTop());
           if ($(window).scrollTop()>= this.deTop) {
               this.isReset && this.addFix();
               this.isReset && (this.isReset =false);
           }else{
               !this.isReset && this.removeFix();
               !this.isReset && (this.isReset = true);
            }
        })
    }
    /**
     * 原有样式
     * */
    getDefaultStyle() {
        let root = this.root;
        this.deTop = root.offset().top;
    }
}