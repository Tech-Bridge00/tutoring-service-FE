import type { ComponentProps } from 'react';
import cn from '../../shared/lib/cn';

/**
 * 버튼 컴포넌트 프롭스 타입
 */
type ButtonProps = {
  label: string;
  variant?: 'primary' | 'outline';
  theme?: 'student' | 'teacher';
  size?: 'sm' | 'md' | 'lg';
} & ComponentProps<'button'>;

/**
 * 버튼 컴포넌트
 * @param label 버튼 텍스트
 * @param variant 버튼 스타일 (primary/outline)
 * @param theme 버튼 테마 (student/teacher)
 * @param size 버튼 크기 (sm/md/lg)
 *
 * @example
 * // 기본 사용법
 * <Button label="버튼" />
 *
 * // variant와 size 지정
 * <Button label="버튼" variant="outline" size="lg" />
 *
 * // theme 지정
 * <Button label="버튼" theme="teacher" />
 *
 * @description
 * 버튼 컴포넌트는 variant, theme, size를 통해 다양한 스타일을 제공합니다.
 * variant는 primary와 outline을 선택할 수 있으며,
 * theme는 student와 teacher를 선택할 수 있습니다.
 * size는 sm, md, lg를 선택할 수 있습니다.
 * button의 property들은 다 포함하고 있어, onClick같은 property들도 사용할 수 있습니다.
 */
export default function Button({
  label,
  variant = 'primary',
  size = 'md',
  theme = 'student',
  ...props
}: ButtonProps) {
  const sizeStyles = {
    sm: 'max-w-[150px] h-[50px] px-2 text-sm',
    md: 'max-w-[220px] h-[48px] px-3 text-base',
    lg: 'max-w-[250px] h-[50px] px-4 text-lg',
  };

  const variantStyles = {
    primary: {
      student: 'bg-[#CAE4F7] text-white border border-[#CAE4F7]',
      teacher: 'bg-[#D9C9E2] text-white border border-[#D9C9E2]',
    },
    outline: {
      student: 'bg-transparent text-[#CAE4F7] border-2 border-[#CAE4F7]',
      teacher: 'bg-transparent text-[#D9C9E2] border-2 border-[#D9C9E2]',
    },
  };

  const { className, ...restProps } = props;

  return (
    <button
      {...restProps}
      className={cn(
        'rounded-[17.5px] font-medium transition-colors flex items-center justify-center cursor-pointer disabled:cursor-not-allowed disabled:brightness-80 hover:brightness-95',
        sizeStyles[size],
        variantStyles[variant][theme],
        className
      )}
    >
      {label}
    </button>
  );
}
