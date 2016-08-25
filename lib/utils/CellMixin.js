'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _optionsJs = require('./options.js');

var _optionsJs2 = _interopRequireDefault(_optionsJs);

var _classNameJs = require('./className.js');

var _classNameJs2 = _interopRequireDefault(_classNameJs);

exports['default'] = function (objs) {
    objs.prototype.test = function () {
        console.log('test1');
    };
    objs.prototype.getCName = function () {
        var pos = arguments.length <= 0 || arguments[0] === undefined ? 'top' : arguments[0];

        return _classNameJs2['default'][pos];
    };
    objs.prototype.isMiddle = function () {
        var pos = arguments.length <= 0 || arguments[0] === undefined ? 'top' : arguments[0];

        return pos == 'middle';
    };
    /**
     * 获取唯一的id
     * */
    objs.prototype.getUniq = function () {
        return 'cell' + Math.floor(Math.random() * 100);
    };
    /**
     * 是否有某class
     * */
    objs.prototype.hasClass = function (obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    };

    /**
     * 增加classs
     * */
    objs.prototype.addClass = function (obj, cls) {
        if (!this.hasClass(obj, cls)) {
            obj.className = (obj.className + " " + cls).replace(/\s{2,}/g, " ");
        }
    };
    /**
     * 删除class
     * */
    objs.prototype.removeClass = function (obj, cls) {
        if (this.hasClass(obj, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = arguments[0].className.replace(reg, ' ').split(" ").join(" ");
        }
    };
    /**
     * 取反
     * @param bool
     * */
    objs.prototype.getInvert = function (isBool) {
        return !isBool;
    };
    /**
     * 获取初始的offsetTop
     * @param dom
     * */
    objs.prototype.getDTop = function (obj) {
        return obj.offsetTop;
    };
};

module.exports = exports['default'];