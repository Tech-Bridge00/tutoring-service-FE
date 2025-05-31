import { createBrowserRouter, type LoaderFunction } from 'react-router';
import NotificationPage from '../../pages/notificationPage/ui/NotificationPage';
import {
  ChatLayout,
  MainLayout,
  NotificationLayout,
} from '../../shared/ui/Layout';
import ChatPage from '@/pages/chatPage/ui/ChatPage';
import { chatRoomLoader } from '@/pages/chatPage/model/chatRoomLoader';
import ChatRoom from '@/pages/chatPage/ui/ChatRoom';
import MapPage from '@/pages/mapPage/ui/MapPage';

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
        element: <MapPage />,
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
  {
    path: '/chat',
    element: <ChatLayout showFooter={true} headerTitle="채팅" />,
    children: [
      {
        index: true,
        element: <ChatPage />,
      },
    ],
  },
  {
    path: '/chat/:id',
    element: <ChatLayout showFooter={false} />,
    loader: chatRoomLoader,
    children: [
      {
        index: true,
        element: <ChatRoom />,
      },
    ],
  },
]);
