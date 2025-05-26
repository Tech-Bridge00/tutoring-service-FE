import ConfirmBox from './ConfirmBox';

type ConfirmContentProps = {
  isClicked: boolean;
  title: string;
  time: string;
  onConfirm?: () => void;
  onReject?: () => void;
};
// clicked id === 알림id clicked === true로
export default function ConfirmContent({
  isClicked,
  title,
  time,
  onConfirm,
  onReject,
}: ConfirmContentProps) {
  return (
    <div className='bg-gradient-to-b from-[#cae4f7] to-[#d9c9e280] px-3 rounded-2xl cursor-pointer overflow-hidden'>
      <div className='flex justify-between items-center w-full py-6'>
        <span className='text-base'>{title}</span>
        <span className='text-base text-[#999999]'>{time}</span>
      </div>
      <div
        className={`transform transition-all duration-300 ease-in-out ${
          isClicked
            ? 'max-h-20 opacity-100 origin-top'
            : 'max-h-0 opacity-0 origin-top'
        }`}
      >
        {isClicked && (
          <ConfirmBox
            onConfirm={onConfirm || (() => {})}
            onReject={onReject || (() => {})}
          />
        )}
      </div>
    </div>
  );
}
