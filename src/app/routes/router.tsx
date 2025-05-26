import { createBrowserRouter, type LoaderFunction } from 'react-router';
import App from '../../App';
import NotificationPage from '../../pages/notificationPage/ui/NotificationPage';
import { MainLayout, NotificationLayout } from '../../shared/ui/Layout';

// 홈 페이지 데이터 로더
const homeLoader: LoaderFunction = async () => {
  return { message: 'Welcome to Tech Bridge' };
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />,
        loader: homeLoader,
      },
    ],
  },
  {
    path: '/notification',
    element: <NotificationLayout />,
    children: [
      {
        index: true,
        element: <NotificationPage />,
        loader: async () => {
          return { notifications: [] };
        },
      },
    ],
  },
]);
