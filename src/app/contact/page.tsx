import { ArrowTopRightOnSquareIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
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
    { icon: EnvelopeIcon, name: 'Email', url: `mailto:${state.user?.email ?? state.user?.social.github.email}` },
    {
      icon: '/icons/facebook.svg',
      name: 'Facebook',
      url: `https://facebook.com/${state.user?.social.facebook.username}`,
    },
    {
      icon: '/icons/github.svg',
      name: 'GitHub',
      url: state.user?.social.github.html_url ?? `https://github.com/${state.user?.social.github.username}`,
    },
    {
      icon: '/icons/linkedin.svg',
      name: 'LinkedIn',
      url: `https://linkedin.com/in/${state.user?.social.linkedin.username}`,
    },
    { icon: '/icons/telegram.svg', name: 'Telegram', url: `https://t.me/${state.user?.social.telegram.username}` },
    { icon: PhoneIcon, name: 'Thelephone', url: `tel:${state.user?.telephone}` },
    { icon: '/icons/twitter.svg', name: 'Twitter', url: `https://twitter.com/${state.user?.social.twitter.username}` },
    { icon: '/icons/whatsapp.svg', name: 'WhatsApp', url: `https://wa.me/${state.user?.social.whatsapp.telephone}` },
  ];

  return (
    <div className={'flex flex-1 max-md:h-max max-md:w-full w-3/6 m-2 items-center justify-center'}>
      <div className={'p-6 bg-medium-spring-green dark:bg-prussian-blue rounded-lg shadow'}>
        <p className={'font-normal'}>
          Contact me via the following methods. I will try to get back to you as soon as possible.
        </p>
        <ul className={'my-4 grid md:grid-cols-2 gap-4'}>
          {contactMethods
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((contactMethod, index) => (
              <li key={index}>
                <Link href={contactMethod.url} target={'_blank'} rel={'noopener noreferrer'} className={'btn-contact'}>
                  {typeof contactMethod.icon === 'string' ? (
                    <Image
                      src={contactMethod.icon}
                      alt={contactMethod.name}
                      priority
                      className={'w-6 h-6'}
                      height={0}
                      width={0}
                    />
                  ) : (
                    <contactMethod.icon className={'w-6 h-6'} />
                  )}
                  <span className={'flex-1 ml-3 whitespace-nowrap'}>{contactMethod.name}</span>
                  <ArrowTopRightOnSquareIcon className={'w-6 h-6'} />
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
