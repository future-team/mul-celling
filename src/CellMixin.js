import options from './options.js';
import styles from './styles.js';
import classNames from './className.js';
export default obj=>{
    obj.prototype.test= function(){
        console.log('test1');
    };
    obj.prototype.getStyles= function(pos = 'top'){
        return styles[pos];
    };
    obj.prototype.getCName= function(pos = 'top'){
        return classNames[pos];
    };
    obj.prototype.isMiddle= function(pos = 'top'){
        return pos == 'middle';
    };
    /**
     * 获取唯一的id
     * */
    obj.prototype.getUniq=function(){
        return 'cell'+Math.floor(Math.random()*100);
    };
    /**
     * 是否有某class
     * */
    obj.prototype.hasClass = function(obj,cls){
        return obj.className.match(new RegExp('(\\s|^)' +cls+ '(\\s|$)'));
    };

    /**
     * 增加classs
     * */
    obj.prototype.addClass = function(obj,cls){
        if (!this.hasClass(obj, cls)) {
            obj.className = (obj.className + " " + cls).replace(/\s{2,}/g, " ");
        }
    };
    /**
     * 删除class
     * */
    obj.prototype.removeClass = function(obj,cls){
        if (this.hasClass(obj,cls)) {
            let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = arguments[0].className.replace(reg, ' ').split(" ").join(" ");
        }
    };
    /**
     * 取反
     * @param bool
     * */
    obj.prototype.getInvert = function(isBool){
        return !isBool;
    }
}