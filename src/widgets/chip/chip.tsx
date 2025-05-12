/**
 * Chip 컴포넌트 - 선택 가능한 필터 칩 UI 요소
 *
 * @component
 * @example
 * // 기본 사용법
 * <Chip
 *   label="프론트엔드"
 *   isSelected={false}
 *   onToggle={() => setSelected(!selected)}
 * />
 *
 * // variant와 size 지정
 * <Chip
 *   label="프론트엔드"
 *   isSelected={true}
 *   onToggle={handleToggle}
 *   variant="teacher"
 *   size="lg"
 * />
 *
 * @description
 * 이 컴포넌트는 필터링 옵션을 선택하는 칩 UI를 제공합니다.
 * 사용자가 칩을 클릭하면 onToggle 함수가 호출되어 선택 상태를 토글합니다.
 * 선택 상태에 따라 테두리 색상이 변경됩니다.
 * variant에 따라 선생님/학생 스타일이 달라집니다.
 * size를 통해 칩의 크기를 조절할 수 있습니다.
 *
 * @flow
 * 1. 사용자가 칩을 클릭
 * 2. onClick 이벤트에 의해 onToggle 함수 실행
 * 3. 부모 컴포넌트에서 상태 업데이트 (isSelected 값 변경)
 * 4. 변경된 isSelected 값에 따라 UI 스타일 업데이트
 */

import type { ComponentProps } from 'react';
import cn from '../../shared/lib/cn';

/**
 * Chip 컴포넌트 프롭스 타입
 */
type ChipProps = {
  label: string;
  isSelected: boolean;
  onToggle: () => void;
  variant?: 'teacher' | 'student';
  size?: 'sm' | 'md' | 'lg';
} & ComponentProps<'div'>;

/**
 * Chip 컴포넌트
 */
export default function Chip({
  label,
  isSelected,
  onToggle,
  variant = 'student',
  size = 'md',
  ...props
}: ChipProps) {
  // 변형에 따른 선택 색상 결정
  const selectedBorderColor =
    variant === 'teacher' ? 'border-[#D9C9E2]' : 'border-[#CAE4F7]';

  // 크기에 따른 스타일 결정
  const sizeStyles = {
    sm: 'max-w-[70px] h-[28px] text-xs px-2',
    md: 'max-w-[85px] h-[35px] text-xs px-3',
    lg: 'max-w-[100px] h-[42px] text-sm px-4',
  };

  const { className, ...restProps } = props;

  return (
    <div
      {...restProps}
      className={cn(
        `${sizeStyles[size]} border-2 rounded-[17.5px] flex items-center whitespace-nowrap justify-center cursor-pointer`,
        {
          [selectedBorderColor]: isSelected,
          'border-[#d9d9d9]': !isSelected,
        },
        className // 외부에서 전달된 className을 병합
      )}
      onClick={onToggle}
    >
      {label}
    </div>
  );
}
