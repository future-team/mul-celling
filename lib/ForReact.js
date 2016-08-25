/**
 * react 适用
 * */
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLibReactDOM = require('react/lib/ReactDOM');

var _reactLibReactDOM2 = _interopRequireDefault(_reactLibReactDOM);

var _utilsCellMixinJs = require('./utils/CellMixin.js');

var _utilsCellMixinJs2 = _interopRequireDefault(_utilsCellMixinJs);

require('../css/cell-react.less');

var _utilsOptionsJs = require('./utils/options.js');

var _utilsOptionsJs2 = _interopRequireDefault(_utilsOptionsJs);

var ForReact = (function (_Component) {
    _inherits(ForReact, _Component);

    function ForReact(props, context) {
        _classCallCheck(this, _ForReact);

        _Component.call(this, props, context);
        this.uniquRef = this.getUniq();
    }

    ForReact.prototype.componentDidMount = function componentDidMount() {
        this.isMiddle && this.addEvent();
    };

    ForReact.prototype.render = function render() {
        return _react2['default'].createElement(
            'div',
            { ref: this.uniquRef, className: this.getClass() },
            this.props.children
        );
    };

    ForReact.prototype.getClass = function getClass() {
        var pos = this.props.position;
        this.isMiddle = this.isMiddle(pos);
        this.cls = this.getCName(pos);
        return !this.isMiddle ? this.cls : '';
    };

    /**
     * 监听事件
     * */

    ForReact.prototype.addEvent = function addEvent() {
        var _this = this;

        var cellDom = _reactLibReactDOM2['default'].findDOMNode(this.refs[this.uniquRef]);
        this.isReset = true;
        var deTop = this.getDTop(cellDom);
        document.addEventListener("scroll", function () {
            var scrollTop = window.document.body.scrollTop;
            if (scrollTop >= deTop) {
                _this.isReset && _this.addClass(cellDom, _this.cls);
                _this.isReset && (_this.isReset = false);
            } else {
                !_this.isReset && _this.removeClass(cellDom, _this.cls);
                !_this.isReset && (_this.isReset = true);
            }
        });
    };

    _createClass(ForReact, null, [{
        key: 'defaultProps',
        value: _utilsOptionsJs2['default'],
        enumerable: true
    }]);

    var _ForReact = ForReact;
    ForReact = _utilsCellMixinJs2['default'](ForReact) || ForReact;
    return ForReact;
})(_react.Component);

module.exports = ForReact;