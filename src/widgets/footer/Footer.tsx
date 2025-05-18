import cn from '../../shared/lib/cn';
import ScheduleIcon from '../../assets/schedule.svg?react';
import UserIcon from '../../assets/user.svg?react';
import MailIcon from '../../assets/mail.svg?react';
import ThumsupIcon from '../../assets/thumsup.svg?react';

import LinkWrapper from './LinkWrapper';
import LogoButton from './LogoButton';

type FooterProps = {
  theme?: 'student' | 'teacher';
};

/**
 * 푸터 컴포넌트
 * @param theme 테마 (student/teacher) - 기본값은 student
 */
export default function Footer({ theme = 'student' }: FooterProps) {
  // 테마별 스타일 정의
  const themeBackgrounds = {
    student: 'bg-[#CAE4F7]',
    teacher: 'bg-[#D9C9E2]',
  };

  // 테마별 아이콘 색상 정의
  const iconColors = {
    student: '#96CCF4',
    teacher: '#BFA2CE',
  };

  return (
    <footer
      className={cn(
        'fixed bottom-0 left-0 right-0 w-full max-w-[390px] mx-auto',
        'border-t border-gray-200',
        themeBackgrounds[theme]
      )}
    >
      {/* 로고 버튼 */}
      <LogoButton
        theme={theme}
        themeBackgrounds={themeBackgrounds}
        iconColors={iconColors}
      />

      <div className='w-full h-[60px] mx-auto flex justify-between items-stretch px-4'>
        <LinkWrapper
          to='/notifications'
          icon={<ScheduleIcon className='w-6 h-6' />}
          label='신청내역'
        />

        <LinkWrapper
          to='/my'
          icon={<UserIcon className='w-6 h-6' />}
          label='마이'
        />

        <div className='flex flex-1 flex-col items-center justify-end py-2'>
          <span className='text-xs font-bold pt-7'>Tech Bridge</span>
        </div>

        <LinkWrapper
          to='/chat'
          icon={<MailIcon className='w-6 h-6' />}
          label='채팅'
        />

        <LinkWrapper
          to='/review'
          icon={<ThumsupIcon className='w-7 h-7' />}
          label='후기 관리'
          className='aspect-auto -mt-1'
        />
      </div>
    </footer>
  );
}
