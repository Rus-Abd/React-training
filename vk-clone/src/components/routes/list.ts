import Home from '../pages/home/Home';
import Messages from '../pages/messages/Messages';
import Profile from '../pages/profile/Profile';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    auth: true,
  },
  {
    path: '/profile/:id',
    exact: true,
    component: Profile,
    auth: false,
  },
  {
    path: '/messages',
    exact: true,
    component: Messages,
    auth: false,
  },
];
