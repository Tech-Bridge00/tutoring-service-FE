// src/pages/chatPage/model/chatRoomLoader.ts
import type { LoaderFunction } from 'react-router';

export const chatRoomLoader: LoaderFunction = async ({ params }) => {
  return { userName: `user-${params.id}` };
};
