import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/home';
// import AboutUs/Page from 'pages/aboutUs';

const routes = [
    {
        path: '',
        component: <Home />
    },
    {
        path: '/home',
        component: <Home />,
        exact: true
    },
    {
        path: '/Signup',
        component: <Signup />,
        exact: true
    },
    {
        path: '/Login',
        component: <Login />,
        exact: true
    },
    
    // {
    //     path: '/aboutUs',
    //     component: AboutUsPage,
    //     exact: true
    // },
    // and so on for other routes in your project
]

export default routes;