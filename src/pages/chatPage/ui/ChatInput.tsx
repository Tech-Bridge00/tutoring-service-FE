import { useRef, useState } from 'react';

/**
 * ChatInput 컴포넌트
 * 채팅 입력창 역할을 하며, contentEditable div를 사용합니다.
 * @example <ChatInput />
 * @description
 * - Enter 입력 시(Shift 없이) 전송 및 입력 초기화
 * - Shift+Enter 입력 시 줄바꿈
 * - 입력값은 value 상태로 관리
 * - placeholder는 value가 비었을 때만 보임
 * @prop 없음
 */

export default function ChatInput() {
  const [value, setValue] = useState('');
  const divRef = useRef<HTMLDivElement>(null);

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    setValue(e.currentTarget.innerText);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      setValue('');
      if (divRef.current) divRef.current.innerText = '';
    }
  };

  return (
    <div
      ref={divRef}
      contentEditable
      suppressContentEditableWarning
      className='hide-scrollbar chat-input'
      onInput={handleInput}
      onKeyDown={handleKeyDown}
    >
      {value === '' && (
        <span className='text-[#9291914D] pointer-events-none select-none'>
          메세지 입력
        </span>
      )}
    </div>
  );
}
