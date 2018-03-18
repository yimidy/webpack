import './css/common.css';
import layer from './components/layer/layer.js';


const  App = function(){
  const num = 1;
  alert(num);
 var demo = document.getElementById('demo');
 var oLayer = new layer();
 demo.innerHTML =oLayer.tpl({
     name: 'layer',
     arr: ['xiaomi','huawei','zhongxing']
 });
}

new App();