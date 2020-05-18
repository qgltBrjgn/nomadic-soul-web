// 一级路由
import menu_parent from '../components/menu_parent.vue'
import menu_child_one from '../components/menu_child_one.vue';
import menu_child_two from '../components/menu_child_two.vue';

let menuList = [{path: '/menu_child_one', name: 'menu_child_one', component: menu_child_one}, {path: '/menu_child_two', name: 'menu_child_two', component: menu_child_two}];
export default [
    {
        path: '/menu_parent',
        name: 'menu_parent',
        component: menu_parent,
        children: menuList
    }
];
