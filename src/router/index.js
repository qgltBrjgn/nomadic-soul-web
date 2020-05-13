import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// 导入配置列表
import main from './main';
import menu from './menu';
// 实例化路由
let router = new Router({
  routes: []
});

router.addRoutes(main);
router.addRoutes(menu);
export default router;
