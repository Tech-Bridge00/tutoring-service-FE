import Button from '../../../widgets/button/Button';

export default function NotificationPage() {
  return (
    <div className='max-w-[390px] mx-auto px-[5px]'>
      <div className='bg-gradient-to-b from-[#cae4f7] to-[#d9c9e280] px-3 rounded-2xl'>
        <div className='flex justify-between items-center w-full py-6'>
          <span className='text-base'> 박요셉님이 과외를 신청하셨습니다.</span>
          <span className='text-base text-[#999999]'>1시간 전</span>
        </div>
        <div className='w-full flex items-center justify-around px-14 pb-4'>
          <Button
            label='수락'
            variant='outline'
            theme='student'
            className='w-30 bg-white h-[30px]'
          />
          <Button
            label='거부'
            variant='outline'
            theme='teacher'
            className='w-30 bg-white h-[30px]'
          />
        </div>
      </div>
    </div>
  );
}
