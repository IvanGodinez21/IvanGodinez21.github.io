import DiscordActivity from '@/components/cards/discord_activity';
import H2 from '@/components/typography/h2';
import Image from 'next/image';
import moment from 'moment';
import { AcademicCapIcon, CodeBracketIcon, DocumentTextIcon, FingerPrintIcon } from '@heroicons/react/24/solid';
import { getUser } from '@/utils/getUser';

export default async function IndexPage() {
  const user = await getUser();
  const aboutCells = [
    { title: 'First name', value: user.firstName },
    { title: 'Secondary name', value: user.secondaryName },
    { title: "Father's last name", value: user.fathersName },
    { title: "Mother's last name", value: user.mothersName },
    { title: 'Gender', value: user.gender },
    { title: 'Birthdate', value: user.birthdate ? moment(user.birthdate).format('L') : undefined },
    { title: 'Age', value: user.age },
    { title: 'Birthday', value: user.birthday?.date ? moment(user.birthday?.date).format('L') : undefined },
  ];

  return (
    <div className={'h-fit w-full m-2'}>
      <div className={'md:flex no-wrap md:space-x-2 max-md:space-y-2'}>
        <div className={'col-span-2 w-full md:w-3/12 space-y-2 sticky'}>
          {user.social.github.avatar_url && (
            <div
              className={
                'bg-medium-spring-green dark:bg-prussian-blue p-3 rounded-lg flex flex-col justify-center items-center'
              }
            >
              <Image
                src={user.social.github.avatar_url}
                alt={user.social.github.username ?? (`${user.social.github.username} avatar` || 'avatar')}
                priority
                className={'h-auto lg:w-[70vw] sm:w-[43vw] max-sm:w-[43vw] mx-auto rounded-full'}
                sizes={'70vw, 43vw, 43vw'}
                width={0}
                height={0}
              />
            </div>
          )}
          <div
            className={
              'bg-medium-spring-green dark:bg-prussian-blue p-3 rounded-lg flex flex-col justify-center items-center'
            }
          >
            {user.fullName && <p className={'font-bold text-lg text-center leading-8 my-1'}>{user.fullName}</p>}
            {user.jobTitle && <p className={'font-lg text-center leading-6'}>{user.jobTitle}</p>}
          </div>
          <DiscordActivity user={user} />
        </div>
        <div className={'w-full space-y-2'}>
          {user.description && (
            <div className={'bg-medium-spring-green dark:bg-prussian-blue p-3 shadow-sm rounded-lg'}>
              <div className={'flex items-center space-x-2 font-semibold leading-8 mb-3'}>
                <DocumentTextIcon className={'h-6 w-6'} />
                <H2>Description</H2>
              </div>
              <div className={'text-sm m-2'}>
                <p>{user.description}</p>
              </div>
            </div>
          )}
          {aboutCells.filter((cell) => cell.value).length > 0 && (
            <div className={'bg-medium-spring-green dark:bg-prussian-blue p-3 shadow-sm rounded-lg'}>
              <div className={'flex items-center space-x-2 font-semibold leading-8 mb-3'}>
                <FingerPrintIcon className={'h-6 w-6'} />
                <H2>Information</H2>
              </div>
              <div className={'grid md:grid-cols-2 text-sm gap-2 m-2'}>
                {aboutCells.map(
                  (cell, index) =>
                    cell.value && (
                      <div key={index} className={'grid grid-cols-2 gap-2'}>
                        <p className={'font-semibold'}>{cell.title}</p>
                        <p>{cell.value}</p>
                      </div>
                    )
                )}
              </div>
            </div>
          )}
          <div>
            <div className={'md:flex max-md:grid max-md:space-y-2 md:space-x-2 text-sm'}>
              {user.technologies?.length && (
                <div className={'bg-medium-spring-green dark:bg-prussian-blue p-3 shadow-sm rounded-lg md:flex-1'}>
                  <div className={'flex items-center space-x-2 font-semibold leading-8'}>
                    <CodeBracketIcon className={'w-6 h-6'} />
                    <H2>Tecnologies</H2>
                  </div>
                  <ul className={'list-inside list-disc grid grid-cols-2 gap-2 m-2'}>
                    {user.technologies?.length ? (
                      user.technologies
                        ?.sort((a, b) => (a > b ? 1 : -1))
                        .map((technology, index) => <li key={index}>{technology}</li>)
                    ) : (
                      <li>{'None'}</li>
                    )}
                  </ul>
                </div>
              )}
              {user.education?.length && (
                <div className={'bg-medium-spring-green dark:bg-prussian-blue p-3 shadow-sm rounded-lg md:flex-1'}>
                  <div className={'flex items-center space-x-2 font-semibold leading-8'}>
                    <AcademicCapIcon className={'w-6 h-6'} />
                    <H2>Education</H2>
                  </div>
                  <ul className={'list-inside list-disc grid gap-2 m-2'}>
                    {user.education
                      ?.sort((a, b) => (a > b ? 1 : -1))
                      .map((school, index) => (
                        <li key={index}>{school}</li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
