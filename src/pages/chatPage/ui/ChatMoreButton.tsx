import PlusIcon from '@/assets/plus.svg?react';

type ChatMoreButtonProps = {
  onClick: () => void;
};

export default function ChatMoreButton({ onClick }: ChatMoreButtonProps) {
  return (
    <button
      type='button'
      className='p-[10px] bg-white rounded-full flex items-center justify-center cursor-pointer'
      onClick={onClick}
    >
      <PlusIcon width={15} height={15} />
    </button>
  );
}
