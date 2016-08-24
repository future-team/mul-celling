/**
 * h5适用组件
 * */
import React, {PropTypes,Component} from 'react';
import CellFRPC from './ForReact.js';
import '../css/cell-h5.less';
export default class CellFH extends Component{
    constructor(props,context) {
        super(props,context);
    }
    render(){
        return(
            <CellFRPC />
        )
    }
}
