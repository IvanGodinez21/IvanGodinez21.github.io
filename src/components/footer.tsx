import Image from 'next/image';
import { FC } from 'react';
import { useAppState } from '@/contexts/app_state';

const Footer: FC = () => {
  const { user } = useAppState();

  return (
    <div className={'bg-emerald text-gunmetal md:flex md:items-center md:justify-between p-2'}>
      <div className={'flex max-md:justify-center max-md:text-center'}>
        <span className={'text-sm font-medium sm:text-center'}>
          {`Made with ❤️${user.fullName ? ` by ${user.fullName}.` : ''}`}
        </span>
      </div>
      <div className={'flex max-md:justify-center'}>
        {user.social.facebook.username && (
          <a className={'btn-footer-icon'} href={`https://facebook.com/${user.social.facebook.username}`}>
            <Image priority src={'/icons/facebook.svg'} alt={'Facebook'} className={'w-5 h-5'} width={0} height={0} />
          </a>
        )}
        {(user.social.github.html_url ?? user.social.github.username) && (
          <a
            className={'btn-footer-icon'}
            href={user.social.github.html_url ?? `https://github.com/${user.social.github.username}`}
          >
            <Image priority src={'/icons/github.svg'} alt={'GitHub'} className={'w-5 h-5'} width={0} height={0} />
          </a>
        )}
        {user.social.linkedin.username && (
          <a className={'btn-footer-icon'} href={`https://linkedin.com/in/${user.social.linkedin.username}`}>
            <Image priority src={'/icons/linkedin.svg'} alt={'LinkedIn'} className={'w-5 h-5'} width={0} height={0} />
          </a>
        )}
        {user.social.twitter.username && (
          <a
            className={'btn-footer-icon'}
            href={user.social.github.login ? `https://twitter.com/${user.social.twitter.username}` : undefined}
          >
            <Image priority src={'/icons/twitter.svg'} alt={'Twitter'} className={'w-5 h-5'} width={0} height={0} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Footer;
