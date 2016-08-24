import React, { Component ,PropTypes} from 'react';
import {ForReact} from '../../src/index.js';

export default class CellFRDemo extends Component {
    constructor(props,context) {
        super(props,context);
    }
    render() {
        return (
           <ForReact position='middle'>
               <div className="test" style={{width: '150px',height:'40px',border:'1px solid #f00'}}>测试好吧</div>
           </ForReact>
        );
    }
}