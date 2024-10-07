// router.js
import { createWebHistory, createRouter } from 'vue-router';

import Home from '@/views/bt1.vue';
import SignIn from '@/views/bt4.vue';
import SignUp from '@/views/bt3.vue';
import Contact from '@/views/bt2.vue';
import NotFound from '@/views/bt5.vue';
import User from '@/views/bt9/listUser.vue';
import UserDetail from '@/views/bt9/userDetail.vue';
import ListEmployee from '@/views/bt10/ListEmployee.vue';
import EmployeeDetail from '@/views/bt10/EmployeeDetail.vue';
import Profile from '@/views/bt10/Profile.vue';
import Projects from '@/views/bt10/Project.vue';
import Contact2 from '@/views/bt10/Contact2.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/signIn', component: SignIn },
    { path: '/signUp', component: SignUp },
    { path: '/contact', component: Contact },
    {
        path: '/user',
        component: User,
        children: [
            { path: ':id', component: UserDetail },
        ],
    },
    { path: '/:pathMatch(.*)*', component: NotFound },
    {
        path: '/employees',
        name: 'ListEmployee',
        component: ListEmployee,
    },
    {
        path: '/employees/:id',
        name: 'EmployeeDetail',
        component: EmployeeDetail,
        children: [
            {
                path: 'profile',
                name: 'Profile',
                component: Profile,
            },
            {
                path: 'projects',
                name: 'Projects',
                component: Projects,
            },
            {
                path: 'contact',
                name: 'Contact',
                component: Contact2,
            },
        ],
    },
    { path: '/', redirect: '/employees' },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
