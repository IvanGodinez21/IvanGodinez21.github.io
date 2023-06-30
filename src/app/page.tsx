import { getUser } from '@/utils/getUser';
import Image from 'next/image';

export default async function IndexPage() {
  const user = await getUser();

  return (
    <div className={'h-fit w-full m-2'}>
      <Image
        src={user.social.github.avatar_url}
        alt={user.social.github.username ?? (`${user.social.github.username} avatar` || 'avatar')}
        priority
        className={'rounded mr-2 w-auto h-auto'}
        sizes={'100vw'}
        width={0}
        height={0}
      />
    </div>
  );
}
