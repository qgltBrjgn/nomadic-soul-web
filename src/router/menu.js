// 一级路由
import menu_parent from '../components/menu_parent.vue'
import menu_child from '../components/menu_child.vue';

let menuList = [{path: '/menu_child', name: 'menu_child', component: menu_child}];
export default [
    {
        path: '/menu_parent',
        name: 'menu_parent',
        component: menu_parent,
        children: menuList
    }
];
