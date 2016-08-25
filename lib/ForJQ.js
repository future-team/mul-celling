/**
 * jquery 适用
 * */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _utilsCellMixinJs = require('./utils/CellMixin.js');

var _utilsCellMixinJs2 = _interopRequireDefault(_utilsCellMixinJs);

require('../css/cell-jq.less');

var _utilsOptionsJs = require('./utils/options.js');

var _utilsOptionsJs2 = _interopRequireDefault(_utilsOptionsJs);

var _utilsClassNameJs = require('./utils/className.js');

var _utilsClassNameJs2 = _interopRequireDefault(_utilsClassNameJs);

var _ForJQ2 = (function () {
    function _ForJQ2() {
        var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, _ForJQ);

        this.opts = _jquery2['default'].extend({}, _utilsOptionsJs2['default'], opts);
        this.root = _jquery2['default'](this.opts.root);
        this.className = this.getCName(this.opts.position);
        this.switchPos();
    }

    /**
     * 判断是否middle
     * */

    _ForJQ2.prototype.switchPos = function switchPos() {
        this.isMiddle(this.opts.position) ? this.addEvent() : this.addFix();
    };

    _ForJQ2.prototype.addFix = function addFix() {
        this.addClass(this.root[0], this.className);
    };

    _ForJQ2.prototype.removeFix = function removeFix() {
        this.removeClass(this.root[0], this.className);
    };

    /**
     * addEvent
     * */

    _ForJQ2.prototype.addEvent = function addEvent() {
        var _this = this;

        var deTop = this.getDTop(this.root[0]);
        this.isReset = true;
        _jquery2['default'](window).on('scroll', function () {
            if (_jquery2['default'](window).scrollTop() >= deTop) {
                _this.isReset && _this.addFix();
                _this.isReset && (_this.isReset = false);
            } else {
                !_this.isReset && _this.removeFix();
                !_this.isReset && (_this.isReset = true);
            }
        });
    };

    var _ForJQ = _ForJQ2;
    _ForJQ2 = _utilsCellMixinJs2['default'](_ForJQ2) || _ForJQ2;
    return _ForJQ2;
})();

if (typeof _ForJQ2 == 'undefined') {
    window.ForJQ = exports['ForJQ'];
}
_jquery2['default'].fn.extend({
    ForJQ: function ForJQ(opt) {
        new _ForJQ2(opt, this);
        return this;
    }
});
module.exports = _ForJQ2;