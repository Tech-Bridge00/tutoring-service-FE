import { ChatBg, ChatBox } from '@/pages/chatPage/ui';

export default function ChatPage() {
  return (
    <div className='hide-scrollbar relative flex flex-col w-full max-w-[390px] mx-auto px-7 h-[calc(100dvh-116px)] overflow-y-scroll'>
      <ChatBg />
      <ChatBox
        name='김민수'
        message='안녕하세요'
        count={2}
        time='3:14'
        img=''
      />
    </div>
  );
}

