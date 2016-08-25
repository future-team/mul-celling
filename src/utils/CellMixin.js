import options from './options.js';
import classNames from './className.js';
export default objs=>{
    objs.prototype.test= function(){
        console.log('test1');
    };
    objs.prototype.getCName= function(pos = 'top'){
        return classNames[pos];
    };
    objs.prototype.isMiddle= function(pos = 'top'){
        return pos == 'middle';
    };
    /**
     * 获取唯一的id
     * */
    objs.prototype.getUniq=function(){
        return 'cell'+Math.floor(Math.random()*100);
    };
    /**
     * 是否有某class
     * */
    objs.prototype.hasClass = function(obj,cls){
        return obj.className.match(new RegExp('(\\s|^)' +cls+ '(\\s|$)'));
    };

    /**
     * 增加classs
     * */
    objs.prototype.addClass = function(obj,cls){
        if (!this.hasClass(obj, cls)) {
            obj.className = (obj.className + " " + cls).replace(/\s{2,}/g, " ");
        }
    };
    /**
     * 删除class
     * */
    objs.prototype.removeClass = function(obj,cls){
        if (this.hasClass(obj,cls)) {
            let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = arguments[0].className.replace(reg, ' ').split(" ").join(" ");
        }
    };
    /**
     * 取反
     * @param bool
     * */
    objs.prototype.getInvert = function(isBool){
        return !isBool;
    };
    /**
     * 获取初始的offsetTop
     * @param dom
     * */
    objs.prototype.getDTop = function(obj){
        return obj.offsetTop;
    };
}