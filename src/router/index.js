import Vue    from 'vue';
import Router from 'vue-router';
import Main   from '@/views/Main';
import Item   from '@/views/Item';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path      : '/',
            name      : 'main',
            component : Main
        },
        {
            path      : '/create',
            name      : 'create',
            props     : true,
            component : Item,
        },
        {
            path      : '/edit/:id',
            name      : 'edit',
            props     : true,
            component : Item,
        },
    ],
});
