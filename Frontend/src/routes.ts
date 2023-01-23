import Layout from './components/Layout.vue';
import EmpForm from './components/EmpForm.vue';
import DeptForm from './components/DeptForm.vue';
import Table from './components/Table.vue';
import SignIn from './components/SignIn.vue'

const routes = [
    {
        path: '/',
        component: SignIn
    },
    {
        path: '/home',
        component: Layout,
        children: [
            {
                path: '',
                component: Table
            },
            {
                path: '/table',
                component: Table
            },
            {
                path: '/addEmployee',
                component: EmpForm
            }, {
                path: '/addDepartment',
                component: DeptForm
            },
        ]
    },
]

export { routes }