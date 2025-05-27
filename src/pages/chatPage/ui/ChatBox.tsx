import { useNavigate } from 'react-router';

type ChatBoxProps = {
  roomId: string;
  name: string;
  message: string;
  count: number;
  time: string;
  img: string;
};

export function ChatBox({
  roomId,
  name,
  message,
  count,
  time,
  img,
}: ChatBoxProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/chat/${roomId}`);
  };

  return (
    <div
      onClick={handleClick}
      className='flex items-center justify-between gap-2 w-full bg-white h-[90px] min-h-[90px] rounded-[20px] mt-7 px-4 shadow-[0_10px_30px_#D7E3EB] cursor-pointer'
    >
      <div className='bg-gray-300 rounded-full w-[50px] h-[50px] min-w-[50px] relative aspect-auto'>
        <img
          src={img}
          alt='profile-image'
          className='w-full h-full rounded-full object-cover'
        />
      </div>
      <div className='flex-1 flex flex-col gap-1 '>
        <span className='text-sm'>{name}</span>
        <span className='text-[#929191] text-xs line-clamp-1'>{message}</span>
      </div>
      <div className='min-w-8 flex flex-col gap-1 justify-center items-center'>
        <div className='w-5 h-5 bg-[#FF6363] rounded-full text-white font-bold text-xs flex items-center justify-center'>
          {count}
        </div>
        <div className='text-xs text-[#929191]'>{time}</div>
      </div>
    </div>
  );
}
