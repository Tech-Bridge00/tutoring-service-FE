import cn from '@/shared/lib/cn';

type ChatBoxProps = {
  img: string;
  message: string;
  isReverse?: boolean;
  isFirst?: boolean;
};

export default function ChatBox({
  img,
  message,
  isReverse = false,
  isFirst = false,
}: ChatBoxProps) {
  return (
    <div
      className={cn(`flex items-center gap-2`, isReverse && 'flex-row-reverse')}
    >
      <div className='bg-gray-300 rounded-full w-[73px] h-[73px] min-w-[73px] relative aspect-auto'>
        <img
          src={img}
          alt='profile-image'
          className='w-full h-full rounded-full object-cover'
        />
      </div>
      <div
        className={cn(
          `relative bg-[#CAE4F7] rounded-lg p-2 break-words text-sm leading-6`,
          isReverse ? 'rounded-tr-none' : 'rounded-tl-none',
          !isFirst && 'rounded-lg'
        )}
      >
        {message}
        {isFirst && (
          <span className={isReverse ? `chat-tag-right` : `chat-tag-left`} />
        )}
      </div>
    </div>
  );
}
