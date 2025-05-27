import { useLoaderData } from 'react-router';
import { ChatBg } from './ChatBg';
import ChatBox from './ChatBox';

export default function ChatRoom() {
  const data = useLoaderData() as { img: string };

  return (
    <section className='hide-scrollbar relative flex flex-col w-full max-w-[390px] mx-auto px-4 mt-8 gap-y-8 h-[calc(100dvh-116px)] overflow-y-scroll'>
      <ChatBg />
      <div className='flex items-center gap-2'>
        <div className='bg-gray-300 rounded-full w-[73px] h-[73px] min-w-[73px] relative aspect-auto'>
          <img
            src={data?.img || ''}
            alt='profile-image'
            className='w-full h-full rounded-full object-cover'
          />
        </div>
        <div className='bg-[#CAE4F780] max-w-60 flex-1 min-h-14 rounded-lg p-2 break-words text-sm leading-6'>
          아니 그게 아니라 지금 무슨말을 하는건데 짜증나게 내가 이야기 하는건
          그런게 아니잖아 지금 뭐하자는거야 나랑 싸우자는거야? 왜 이렇게 말이
          안통해?
        </div>
      </div>
      <ChatBox
        img={data?.img || ''}
        message='지랄 ㄴ'
        isReverse={true}
        isFirst={true}
      />
      <ChatBox img={data?.img || ''} message='안녕하세요' isFirst={true} />
      <ChatBox
        img={data?.img || ''}
        message='안녕하세요'
        isReverse={true}
        isFirst={true}
      />
      <div className='relative bg-[#CAE4F7] max-w-60 rounded-lg rounded-tl-none p-2 text-sm leading-6 mr-auto ml-2'>
        저녁에 머함
        <span className='chat-tag-left'></span>
      </div>
    </section>
  );
}
