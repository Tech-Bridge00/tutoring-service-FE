import BalloonIcon from '../../assets/balloon.svg?react';
import LogoIcon from '../../assets/logo.svg?react';
import { Link } from 'react-router';

type LogoButtonProps = {
  theme: 'student' | 'teacher';
  themeBackgrounds: Record<string, string>;
  iconColors: Record<string, string>;
};

/**
 * 푸터의 중앙 로고 버튼 컴포넌트
 * @param theme 테마 (student/teacher)
 * @param themeBackgrounds 테마별 배경색 스타일
 * @param iconColors 테마별 아이콘 색상
 */
export default function LogoButton({
  theme,
  themeBackgrounds,
  iconColors,
}: LogoButtonProps) {
  return (
    <div className='absolute left-1/2 -translate-x-1/2 -top-15 -z-10'>
      <div
        className={`${themeBackgrounds[theme]} p-7 rounded-full flex items-center justify-center -z-10`}
      >
        <div className='relative'>
          <BalloonIcon
            className='absolute w-22 h-22 -top-4 -left-[19px] z-0'
            fill={iconColors[theme]}
          />
          <Link
            to='/'
            className='relative -top-2 z-10 flex items-center justify-center bg-white p-2 rounded-full shadow-md w-[47px] h-[47px]'
          >
            <LogoIcon className='w-8 h-8' />
          </Link>
        </div>
      </div>
    </div>
  );
}

