import React, { Component ,PropTypes} from 'react';
//import {ForH5} from '../../src/ForH5.js';
import {ForReact} from '../../src/ForReact.js';
export default class CellFHDemo extends Component {
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