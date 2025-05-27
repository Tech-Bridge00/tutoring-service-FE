import PlusIcon from '@/assets/plus.svg?react';

export default function ChatMoreButton() {
  return (
    <button
      type='button'
      className='p-[10px] bg-white rounded-full flex items-center justify-center cursor-pointer'
    >
      <PlusIcon width={15} height={15} />
    </button>
  );
}
