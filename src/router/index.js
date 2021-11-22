import { createRouter, createWebHistory } from 'vue-router';
import CoachList from '../pages/coach/CoachList.vue';
import CoachDetails from '../pages/coach/CoachDetails.vue';
import CoachContact from '../pages/coach/CoachContact.vue';
import CoachRegister from '../pages/coach/CoachRegister.vue';
import RequestsReceived from '../pages/requests/RequestsReceived.vue';
import NotFound from '../pages/NotFound.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/coaches',
        },
        {
            path: '/coaches',
            component: CoachList,
        },
        {
            path: '/coaches/:id',
            component: CoachDetails,
            children: [
                {
                    path: '/contact',
                    component: CoachContact,
                },
            ],
        },
        {
            path: '/register',
            component: CoachRegister,
        },
        {
            path: '/requests',
            component: RequestsReceived,
        },
        {
            path: '/:notFound(.*)',
            component: NotFound,
        },
    ],
});
