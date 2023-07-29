import {
  ArrowTopRightOnSquareIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { store } from '@/store/index';
import { IContactMethod } from '@/types/contact';

export default async function ContactPage() {
  const state = store.getState().state;
  const contactMethods: IContactMethod[] = [
    {
      icon: '/icons/discord.svg',
      name: 'Discord',
      url: `https://discord.com/channels/${state.user?.social.discord.username}`,
    },
    {
      icon: EnvelopeIcon,
      name: 'Email',
      url: `mailto:${state.user?.email ?? state.user?.social.github.email}`,
    },
    {
      icon: '/icons/facebook.svg',
      name: 'Facebook',
      url: `https://facebook.com/${state.user?.social.facebook.username}`,
    },
    {
      icon: '/icons/github.svg',
      name: 'GitHub',
      url:
        state.user?.social.github.html_url ??
        `https://github.com/${state.user?.social.github.username}`,
    },
    {
      icon: '/icons/linkedin.svg',
      name: 'LinkedIn',
      url: `https://linkedin.com/in/${state.user?.social.linkedin.username}`,
    },
    {
      icon: '/icons/telegram.svg',
      name: 'Telegram',
      url: `https://t.me/${state.user?.social.telegram.username}`,
    },
    { icon: PhoneIcon, name: 'Telephone', url: `tel:${state.user?.telephone}` },
    {
      icon: '/icons/twitter.svg',
      name: 'Twitter',
      url: `https://twitter.com/${state.user?.social.twitter.username}`,
    },
    {
      icon: '/icons/whatsapp.svg',
      name: 'WhatsApp',
      url: `https://wa.me/${state.user?.social.whatsapp.telephone}`,
    },
  ];

  return (
    <div
      className={
        'm-2 flex w-3/6 flex-1 items-center justify-center max-md:h-max max-md:w-full'
      }
    >
      <div
        className={
          'rounded-lg bg-medium-spring-green p-6 shadow dark:bg-prussian-blue'
        }
      >
        <p className={'font-normal'}>
          Contact me via the following methods. I will try to get back to you as
          soon as possible.
        </p>
        <ul className={'my-4 grid gap-4 md:grid-cols-2'}>
          {contactMethods
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((contactMethod, index) => (
              <li key={index}>
                <Link
                  href={contactMethod.url}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                  className={'btn-contact'}
                >
                  {typeof contactMethod.icon === 'string' ? (
                    <Image
                      src={contactMethod.icon}
                      alt={contactMethod.name}
                      priority
                      className={'h-6 w-6'}
                      height={0}
                      width={0}
                    />
                  ) : (
                    <contactMethod.icon className={'h-6 w-6'} />
                  )}
                  <span className={'ml-3 flex-1 whitespace-nowrap'}>
                    {contactMethod.name}
                  </span>
                  <ArrowTopRightOnSquareIcon className={'h-6 w-6'} />
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
