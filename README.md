# multiple-celling

-	这是一个适用于jquery和react两种技术栈的celling组件     
	是的没错，不管你是jquery还是react都可以使用该组件，而不需要分别引用不同的版本或者组件
-	实现元素吸顶、吸底或者元素将要隐去时吸顶等效果	

## 使用

-	使用时，jquery版本需要指定要处理的元素，fix的位置     
	配置项如下：
 
 ```
       /**
        * 要实现fix的元素选择器，如'.test'
        * */
        root:'',
       /**
        * fix的位置
        * top,bottom,middle
        * */
       position:'top'
       
 ``` 
-	使用实例：    

 	jq版本:
 
 ```
 	import {ForJQ} from '../../src/ForJQ.js';
 	(()=>{
            $('.test').ForJQ({
            			root:'.test',
            			position:'middle'
            		  });
     })()
    
 ```     
-   react版本   
   
 	```
 	import ForReact from '../../src/ForReact.js';
     
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
 	```  
 	
 html:
 
 ```
 
    <div id="root" style="padding: 10px">
        <div class="test" style="width: 150px;height:40px;border:1px solid #f00">测试好吧</div>
    </div>
    
 ```
- 	注：若要兼容ie8及以下版本请引入es5-shim。    
   		在html中判断版本，ie9以下引入。例如：    
  
  ```
     <!--[if lt IE 9] >
     <script src="http://cdn.bootcss.com/es5-shim/4.5.9/es5-shim.js"></script>
     <!--[endif]-->
  
  ```
	
  
## update

   - 0.1.0及之前版本 init及修复 

## Command

```
	#测试	
	npm run test	
	#打包	
	npm run build	
	#例子演示	
	npm run demo	
```
