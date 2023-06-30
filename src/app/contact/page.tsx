import Image from 'next/image';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { IContactMethod } from '@/types/contact';
import { getUser } from '@/utils/getUser';

export default async function ContactPage() {
  const user = await getUser();
  const contactMethods: IContactMethod[] = [
    {
      icon: '/icons/discord.svg',
      name: 'Discord',
      url: `https://discord.com/channels/${user.social.discord.username}`,
    },
    { icon: EnvelopeIcon, name: 'Email', url: `mailto:${user.email ?? user.social.github.email}` },
    { icon: '/icons/facebook.svg', name: 'Facebook', url: `https://facebook.com/${user.social.facebook.username}` },
    {
      icon: '/icons/github.svg',
      name: 'GitHub',
      url: user.social.github.html_url ?? `https://github.com/${user.social.github.username}`,
    },
    { icon: '/icons/linkedin.svg', name: 'LinkedIn', url: `https://linkedin.com/in/${user.social.linkedin.username}` },
    { icon: '/icons/telegram.svg', name: 'Telegram', url: `https://t.me/${user.social.telegram.username}` },
    { icon: PhoneIcon, name: 'Thelephone', url: `tel:${user.telephone}` },
    { icon: '/icons/twitter.svg', name: 'Twitter', url: `https://twitter.com/${user.social.twitter.username}` },
    { icon: '/icons/whatsapp.svg', name: 'WhatsApp', url: `https://wa.me/${user.social.whatsapp.telephone}` },
  ];

  return (
    <div className={'flex flex-1 max-md:h-max max-md:w-full w-3/6 m-2 items-center justify-center'}>
      <div className={'p-6 bg-medium-spring-green dark:bg-prussian-blue rounded-lg shadow'}>
        <p className={'font-normal'}>
          Contact me via the following methods. I will try to get back to you as soon as possible.
        </p>
        <ul className='my-4 grid md:grid-cols-2 gap-4'>
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
