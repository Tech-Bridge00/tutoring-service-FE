// Link 컴포넌트 대신 임시로 a 태그 사용
// react-router-dom이 설치되면 아래 주석을 해제하고 a 태그를 Link로 변경하세요
// import { Link } from 'react-router-dom';
import cn from '../../shared/lib/cn';

// 아이콘 import
import LogoIcon from '../../assets/logo.svg?react';
import BalloonIcon from '../../assets/balloon.svg?react';
import ScheduleIcon from '../../assets/schedule.svg?react';
import UserIcon from '../../assets/user.svg?react';
import MailIcon from '../../assets/mail.svg?react';
import ThumsupIcon from '../../assets/thumsup.svg?react';
import { Link } from 'react-router';

type FooterProps = {
  theme?: 'student' | 'teacher';
};

/**
 * @param theme
 */
export default function Footer({ theme = 'student' }: FooterProps) {
  const themeBackgrounds = {
    student: 'bg-[#CAE4F7]',
    teacher: 'bg-[#D9C9E2]',
  };

  const IconColors = {
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
      <div className='absolute left-1/2 -translate-x-1/2 -top-15 -z-10'>
        <div
          className={`${themeBackgrounds[theme]} p-7 rounded-full flex items-center justify- -z-10`}
        >
          <div className='relative'>
            <BalloonIcon
              className='absolute w-22 h-22 -top-4 -left-[19px] z-0'
              fill={IconColors[theme]}
            />
            <Link
              to='/'
              className='relative -top-2 z-10 flex items-center justify-center bg-white p-2 rounded-full shadow-md w-[47px] h-[47px'
            >
              <LogoIcon className='w-8 h-8' />
            </Link>
          </div>
        </div>
      </div>

      <div className='w-full h-[60px] mx-auto flex justify-between items-stretch px-4'>
        <Link
          to='/notifications'
          className='flex flex-1 flex-col items-center justify-center py-2'
        >
          <ScheduleIcon className='w-6 h-6 mb-1' />
          <span className='text-xs'>신청내역</span>
        </Link>

        {/* 마이 */}
        <Link
          to='/my'
          className='flex flex-1 flex-col items-center justify-center py-2'
        >
          <UserIcon className='w-6 h-6 mb-1' />
          <span className='text-xs'>마이</span>
        </Link>

        <div className='flex flex-1 flex-col items-center justify-end py-2'>
          <span className='text-xs font-bold pt-7'>Tech Bridge</span>
        </div>

        <Link
          to='/chat'
          className='flex flex-1 flex-col items-center justify-center py-2'
        >
          <MailIcon className='w-6 h-6 mb-1' />
          <span className='text-xs'>채팅</span>
        </Link>

        <Link
          to='/review'
          className='flex flex-1 flex-col items-center justify-center py-2 aspect-auto w-17 h-17 -mt-2'
        >
          <ThumsupIcon className='w-full h-full mb-1' />
          <span className='text-xs'>후기 관리</span>
        </Link>
      </div>
    </footer>
  );
}
