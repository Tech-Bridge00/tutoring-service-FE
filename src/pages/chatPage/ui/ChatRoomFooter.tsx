import ChatInput from './ChatInput';
import ChatMoreButton from './ChatMoreButton';
import ChatSendButton from './ChatSendButton';

/**
 * ChatRoomFooter 컴포넌트
 * 채팅 입력 영역(footer)을 담당하며, 플러스 버튼, 입력창, 전송 버튼으로 구성됩니다.
 * @example <ChatRoomFooter />
 */
export default function ChatRoomFooter() {
  return (
    <footer className='fixed bottom-0 left-0 right-0 max-w-[390px] mx-auto w-[390px] bg-[#cae4f7] rounded-t-2xl py-3 px-2 flex items-end gap-2'>
      <ChatMoreButton />
      <ChatInput />
      <ChatSendButton />
    </footer>
  );
}

