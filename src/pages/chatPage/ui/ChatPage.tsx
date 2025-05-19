export default function ChatPage() {
  return (
    <div className='hide-scrollbar relative flex flex-col w-full max-w-[390px] mx-auto px-7 h-[calc(100dvh-116px)] overflow-y-scroll'>
      <div className='fixed h-full w-[390px] inset-0 mx-auto bg-gradient-to-br from-[#cae4f7] to-[#EBE3F0] opacity-30 -z-10' />
      <div className='flex items-center justify-between gap-2 w-full bg-white h-[90px] min-h-[90px] rounded-[20px] mt-7 px-4 shadow-[0_10px_30px_#D7E3EB]'>
        <div className='bg-gray-300 rounded-full w-[50px] h-[50px] min-w-[50px]'></div>
        <div className='flex-1 flex flex-col gap-1 '>
          <span className='text-sm'>000 선생님</span>
          <span className='text-[#929191] text-xs line-clamp-1'>
            채팅 안녕하세요오요오요오asdasdㅁㄴㅇㅁㄴㅇㅁㄴㅇ
          </span>
        </div>
        <div className='min-w-8 flex flex-col gap-1 justify-center items-center'>
          <div className='w-5 h-5 bg-[#FF6363] rounded-full text-white font-bold text-xs flex items-center justify-center'>
            2
          </div>
          <div className='text-xs text-[#929191]'>3:14</div>
        </div>
      </div>
    </div>
  );
}

