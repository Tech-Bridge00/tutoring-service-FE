import React from 'react';

/**
 * ChatMoreActionButton
 * 채팅 입력창 하단의 더보기(앨범/카메라/학생정보 등) 버튼 공통 컴포넌트
 * @param {object} props
 * @param {React.ReactNode} props.icon - 버튼에 표시할 아이콘
 * @param {string} props.label - 버튼 하단에 표시할 텍스트
 * @param {() => void} [props.onClick] - 버튼 클릭 시 동작
 * @example <ChatMoreActionButton icon={<AlbumIcon />} label="앨범" onClick={...} />
 */

type ChatMoreActionButtonProps = {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
};

export default function ChatMoreActionButton({
  icon,
  label,
  onClick,
}: ChatMoreActionButtonProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-[10px]'>
      <button
        type='button'
        className='p-4 bg-[#cae4f7] rounded-full flex items-center justify-center cursor-pointer'
        onClick={onClick}
      >
        {icon}
      </button>
      <span className='text-[#929191]'>{label}</span>
    </div>
  );
}

