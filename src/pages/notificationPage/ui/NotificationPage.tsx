import { useState } from 'react';
import ConfirmContent from './ConfirmContent';
import RoutingContent from './RoutingContent';
import { mockNotifications } from '../types/notification';
import type { Notification } from '../types/notification';

/**
 * 알림 페이지 컴포넌트
 *
 * 알림 목록을 표시하고 타입에 따라 다른 동작을 수행합니다.
 * - route 타입: 클릭 시 지정된 경로로 이동
 * - confirm 타입: 클릭 시 수락/거부 버튼 표시
 */
export default function NotificationPage() {
  // 클릭된 confirm 타입 알림의 ID를 저장하는 상태
  const [clickedId, setClickedId] = useState<number | null>(null);

  const handleConfirmClick = (id: number) => {
    setClickedId(id);
  };

  const handleConfirm = (id: number) => {
    console.log(`알림 ${id} 수락됨`);
    setClickedId(null);
  };

  const handleReject = (id: number) => {
    console.log(`알림 ${id} 거부됨`);
    setClickedId(null);
  };

  return (
    <div className='max-w-[390px] mx-auto px-[5px]'>
      <section className='flex flex-col gap-2'>
        {mockNotifications.map((notification: Notification) => (
          <div key={notification.id} className='mb-2'>
            {notification.type === 'route' ? (
              <RoutingContent
                path={notification.path || '/'}
                title={notification.title}
                time={notification.time}
              />
            ) : (
              <div onClick={() => handleConfirmClick(notification.id)}>
                <ConfirmContent
                  isClicked={clickedId === notification.id}
                  title={notification.title}
                  time={notification.time}
                  onConfirm={() => handleConfirm(notification.id)}
                  onReject={() => handleReject(notification.id)}
                />
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
