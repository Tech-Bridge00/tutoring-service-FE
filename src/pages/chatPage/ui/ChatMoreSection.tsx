import ChatMoreActionButton from './ChatMoreActionButton';
import AlbumIcon from '@/assets/album.svg?react';
import CameraIcon from '@/assets/camera.svg?react';
import UserInfoIcon from '@/assets/userInfo.svg?react';

export default function ChatMoreSection() {
  return (
    <div className='w-full py-10 bg-white flex items-center justify-center gap-12'>
      <ChatMoreActionButton
        icon={<AlbumIcon width={25} height={25} />}
        label='앨범'
        onClick={() => {}}
      />
      <ChatMoreActionButton
        icon={<CameraIcon width={25} height={25} />}
        label='카메라'
        onClick={() => {}}
      />
      <ChatMoreActionButton
        icon={<UserInfoIcon width={25} height={25} />}
        label='학생 정보'
        onClick={() => {}}
      />
    </div>
  );
}
