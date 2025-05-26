export type NotificationType = 'route' | 'confirm';

export type Notification = {
  id: number;
  type: NotificationType;
  title: string;
  time: string;
  is_read: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  receiver_id: string;
  sender_id: string;
  path?: string; // route 타입일 경우 이동할 경로
};

// 목 데이터
export const mockNotifications: Notification[] = [
  {
    id: 1,
    type: 'route',
    title: '박요셉님이 과외를 신청하셨습니다.',
    time: '1시간 전',
    is_read: false,
    created_at: '2025-05-18T07:30:00Z',
    updated_at: '2025-05-18T07:30:00Z',
    deleted_at: null,
    receiver_id: 'teacher1',
    sender_id: 'student1',
    path: '/tutoring/request/1'
  },
  {
    id: 2,
    type: 'confirm',
    title: '김민수님이 과외를 신청하셨습니다.',
    time: '2시간 전',
    is_read: false,
    created_at: '2025-05-18T06:30:00Z',
    updated_at: '2025-05-18T06:30:00Z',
    deleted_at: null,
    receiver_id: 'teacher1',
    sender_id: 'student2'
  },
  {
    id: 3,
    type: 'route',
    title: '이지은님이 메시지를 보냈습니다.',
    time: '3시간 전',
    is_read: true,
    created_at: '2025-05-18T05:30:00Z',
    updated_at: '2025-05-18T05:30:00Z',
    deleted_at: null,
    receiver_id: 'teacher1',
    sender_id: 'student3',
    path: '/chat/3'
  },
  {
    id: 4,
    type: 'confirm',
    title: '최준호님이 과외를 신청하셨습니다.',
    time: '4시간 전',
    is_read: false,
    created_at: '2025-05-18T04:30:00Z',
    updated_at: '2025-05-18T04:30:00Z',
    deleted_at: null,
    receiver_id: 'teacher1',
    sender_id: 'student4'
  }
];
