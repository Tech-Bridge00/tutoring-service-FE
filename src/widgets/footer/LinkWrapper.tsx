import type { ReactNode } from 'react';
import { Link } from 'react-router';

type LinkWrapperProps = {
  to: string;
  icon: ReactNode;
  label: string;
  className?: string;
};

/**
 * 푸터에서 사용되는 링크 아이템 래퍼 컴포넌트
 * @param to 링크 경로
 * @param icon 아이콘 컴포넌트
 * @param label 텍스트 라벨
 * @param className 추가 클래스명
 */
export default function LinkWrapper({
  to,
  icon,
  label,
  className = '',
}: LinkWrapperProps) {
  return (
    <Link
      to={to}
      className={`flex flex-1 flex-col items-center justify-center py-2 ${className}`}
    >
      <div className='mb-1'>{icon}</div>
      <span className='text-xs'>{label}</span>
    </Link>
  );
}

