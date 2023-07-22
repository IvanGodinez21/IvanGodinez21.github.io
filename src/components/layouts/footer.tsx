import Image from 'next/image';
import Link from 'next/link';
import HeartSpan from '../spans/heart';
import { IContactMethod } from '@/types/contact';
import { IUser } from '@/types/user';

export default function Footer({ user }: { user: IUser }) {
  const contactMethods: IContactMethod[] = [
    { icon: '/icons/facebook.svg', name: 'Facebook', url: `https://facebook.com/${user.social.facebook.username}` },
    {
      icon: '/icons/github.svg',
      name: 'GitHub',
      url: user.social.github.html_url ?? `https://github.com/${user.social.github.username}`,
    },
    { icon: '/icons/linkedin.svg', name: 'LinkedIn', url: `https://linkedin.com/in/${user.social.linkedin.username}` },

    { icon: '/icons/twitter.svg', name: 'Twitter', url: `https://twitter.com/${user.social.twitter.username}` },
  ];

  return (
    <div className={'bg-emerald text-gunmetal md:flex md:items-center md:justify-between p-2'}>
      <div className={'flex max-md:justify-center max-md:text-center'}>
        <span className={'text-sm font-medium sm:text-center'}>
          Made with <HeartSpan /> {`${user.fullName ? ` by ${user.fullName}.` : ''}`}
        </span>
      </div>
      <div className={'flex max-md:justify-center'}>
        {contactMethods
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((contactMethod, index) => (
            <Link key={index} href={contactMethod.url} target={'_blank'} rel={'noopener'} className={'btn-footer-icon'}>
              {typeof contactMethod.icon === 'string' && (
                <Image
                  src={contactMethod.icon}
                  alt={contactMethod.name}
                  priority
                  className={'w-5 h-5'}
                  width={0}
                  height={0}
                />
              )}
            </Link>
          ))}
      </div>
    </div>
  );
}
