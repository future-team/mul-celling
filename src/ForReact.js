/**
 * react 适用
 * */
import React, {PropTypes,Component} from 'react';
import ReactDom from 'react/lib/ReactDOM';
import CellMin from './CellMixin.js';
import '../css/cell-react.less';
import options from './options.js';
@CellMin
export default class CellFR extends Component{
    constructor(props,context) {
        super(props,context);
        this.uniquRef = this.getUniq();
    }
    static defaultProps = options;
    componentDidMount(){
        this.isMiddle && this.addEvent();
    }
    render(){
        this.test();
        return(
            <div ref={this.uniquRef} className={
                this.getClass()
            }>
                {this.props.children}
            </div>
        )
    }
    getClass(){
        let pos = this.props.position;
        this.isMiddle = this.isMiddle(pos);
        this.cls = this.getCName(pos);
        return !this.isMiddle ? this.cls :'';
    }
    /**
     * 监听事件
     * */
    addEvent(){
        this.isReset = true;
        let deTop = this.getDTop();
        document.addEventListener("scroll",()=>{
            let scrollTop = window.document.body.scrollTop;
            if (scrollTop >= deTop) {
                this.isReset && this.addClass(this.obj,this.cls);
                this.isReset && (this.isReset = false)
            }else{
                !this.isReset && this.removeClass(this.obj,this.cls);
                !this.isReset && (this.isReset = true);
            }
        })
    }
    getDTop(){
        this.obj = ReactDom.findDOMNode(this.refs[this.uniquRef]);
        return this.obj.offsetTop;
    };
}
