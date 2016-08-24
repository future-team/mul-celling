/**
 * jq demo
 * */
import $ from 'jquery';
import {ForJQ} from '../../src/index.js';
/**
 * react demo
 * */
import React, { Component ,PropTypes} from 'react';
import ReactDom from 'react/lib/ReactDOM';
import CellFRDemo from './ForReact.js';
/**
 * H5 DEMO
 * */
import CellFHDemo from './ForH5.js';


function JQ(){
    $('.test').ForJQ({root:'.test',position:'middle'});
}
function RE(){
    ReactDom.render(
        <CellFRDemo />,
        document.getElementById('root')
    );
}
function H5(){
    ReactDom.render(
        <CellFHDemo />,
        document.getElementById('root')
    );
}
/**
 * 测试不同技术栈的demo，配置参数
 * type = ['JQ','RE','H5']
 * */
let execDemo = ()=>{
    JQ()
}
execDemo();