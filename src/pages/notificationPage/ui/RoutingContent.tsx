import { Link } from 'react-router';

interface RoutingContentProps {
  path: string;
  title: string;
  time: string;
}

export default function RoutingContent({
  path,
  title,
  time,
}: RoutingContentProps) {
  return (
    <Link to={path}>
      <div className='bg-gradient-to-b from-[#cae4f7] to-[#d9c9e280] px-3 rounded-2xl w-full'>
        <div className='flex justify-between items-center w-full py-6'>
          <span className='text-base'>{title}</span>
          <span className='text-base text-[#999999]'>{time}</span>
        </div>
      </div>
    </Link>
  );
}
