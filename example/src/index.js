/**
 * jq demo
 * */
import $ from 'jquery';
import {ForJQ} from '../../src/ForJQ.js';
/**
 * react demo
 * */
import React, { Component ,PropTypes} from 'react';
import ReactDom from 'react/lib/ReactDOM';
import CellFRDemo from './ForReact.js';
/**
 * H5 DEMO
 * is react too
 * */
import CellFHDemo from './ForH5.js';

let fucs = {
    jq:function(){
        $('.test').ForJQ({root:'.test',position:'middle'});
    },
    re:function(){
        ReactDom.render(
            <CellFRDemo />,
            document.getElementById('root')
        );
    },
    h5:function(){
        ReactDom.render(
            <CellFHDemo />,
            document.getElementById('root')
        );
    }
};
/**
 * 测试不同技术栈的demo，配置location.search
 * 默认jq方式
 * type = ['JQ','RE','H5']
 * */
let execDemo = ()=>{
    let method = location.search.substr(1) || 'JQ';
    fucs[method.toLowerCase()]()
};
execDemo();