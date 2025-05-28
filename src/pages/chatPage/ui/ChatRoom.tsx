import { useLoaderData } from 'react-router';
import ChatBox from './ChatBox';
import ChatBg from './ChatBg';
import ChatRoomFooter from './ChatRoomFooter';

export default function ChatRoom() {
  const data = useLoaderData() as { img: string };

  return (
    <section className='hide-scrollbar relative flex flex-col w-full max-w-[390px] mx-auto px-4 mt-8 gap-y-8 h-[calc(100dvh-150px)] overflow-y-scroll'>
      <ChatBg />
      <ChatBox
        img={data?.img || ''}
        message='지랄 ㄴ'
        isReverse={true}
        isFirst={true}
      />
      <ChatBox
        img={data?.img || ''}
        message='아니 그게 아니라 지금 무슨말을 하는건데 짜증나게 내가 이야기 하는건
          그런게 아니잖아 지금 뭐하자는거야 나랑 싸우자는거야? 왜 이렇게 말이
          안통해?'
        isFirst={true}
      />
      <ChatBox
        img={data?.img || ''}
        message='안녕하세요'
        isReverse={true}
        isFirst={true}
      />

      <ChatRoomFooter />
    </section>
  );
}
