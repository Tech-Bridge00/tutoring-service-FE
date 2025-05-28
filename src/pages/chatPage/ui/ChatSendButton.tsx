import ChatButtonIcon from '@/assets/chatButton.svg?react';
import React from 'react';

/**
 * ChatSendButton 컴포넌트
 * 채팅 전송 버튼. 클릭 이벤트 핸들러와 비활성화 상태 지원.
 * @param {Object} props
 * @param {boolean} [props.disabled] - 버튼 비활성화 여부
 * @param {() => void} [props.onClick] - 클릭 시 호출 함수
 * @example <ChatSendButton onClick={handleSend} disabled={isEmpty} />
 */

type ChatSendButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
};

export default function ChatSendButton({
  disabled = false,
  onClick,
}: ChatSendButtonProps) {
  return (
    <button
      type='button'
      className={`cursor-pointer active:opacity-10 relative transition-opacity ${
        disabled ? 'opacity-40 pointer-events-none' : ''
      }`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-label='메시지 전송'
    >
      <ChatButtonIcon
        width={25}
        height={25}
        className='absolute bottom-1 right-3'
      />
      <div className='w-3 bg-white h-[3px] absolute bottom-[15px] right-6' />
    </button>
  );
}

