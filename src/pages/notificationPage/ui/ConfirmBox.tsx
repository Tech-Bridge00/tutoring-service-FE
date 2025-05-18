import Button from '@widgets/button/Button';

type ConfirmBoxProps = {
  onConfirm: () => void;
  onReject: () => void;
};

export default function ConfirmBox({ onConfirm, onReject }: ConfirmBoxProps) {
  return (
    <div className='w-full flex items-center justify-around px-14 pb-4'>
      <Button
        label='수락'
        variant='outline'
        theme='student'
        className='w-30 bg-white h-[30px]'
        onClick={onConfirm}
      />
      <Button
        label='거부'
        variant='outline'
        theme='teacher'
        className='w-30 bg-white h-[30px]'
        onClick={onReject}
      />
    </div>
  );
}
