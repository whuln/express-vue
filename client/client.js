import Vue from 'vue';
//引用全局管理资源
// import store from './store/index';

import iView from 'iview'; // 导入组件库  
import '../node_modules/iview/dist/styles/iview.css'; // 导入样式  
Vue.use(iView);

import App from './APP1.vue'; // 路由挂载  

function createApp(appId) {
    console.log("create app");
    new Vue({
        el: '#' + appId,
        // store,
        render: h => h(App)
    });
}

//创建主应用程序
createApp("app");

exports.createApp = createApp;