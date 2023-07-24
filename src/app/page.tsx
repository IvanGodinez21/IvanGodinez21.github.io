import { AcademicCapIcon, CodeBracketIcon, DocumentTextIcon, FingerPrintIcon } from '@heroicons/react/24/solid';
import moment from 'moment';
import Image from 'next/image';
import DiscordActivity from '@/components/cards/discord_activity';
import H2 from '@/components/typography/h2';
import { store } from '@/store/index';

export default async function IndexPage() {
  const state = store.getState().state;

  const aboutCells = [
    { title: 'First name', value: state.user?.firstName },
    { title: 'Secondary name', value: state.user?.secondaryName },
    { title: "Father's last name", value: state.user?.fathersName },
    { title: "Mother's last name", value: state.user?.mothersName },
    { title: 'Gender', value: state.user?.gender },
    { title: 'Birthdate', value: state.user?.birthdate ? moment(state.user.birthdate).format('L') : undefined },
    { title: 'Age', value: state.user?.age },
    { title: 'Birthday', value: state.user?.birthday ? moment(state.user.birthday).format('L') : undefined },
  ];

  return (
    <div className={'h-fit w-full m-2'}>
      <div className={'md:flex no-wrap md:space-x-2 max-md:space-y-2'}>
        <div className={'col-span-2 w-full md:w-3/12 space-y-2 sticky'}>
          {state.user?.social.github.avatar_url && (
            <div
              className={
                'bg-medium-spring-green dark:bg-prussian-blue p-3 rounded-lg flex flex-col justify-center items-center'
              }
            >
              <Image
                src={state.user.social.github.avatar_url}
                alt={state.user.social.github.username ?? (`${state.user.social.github.username} avatar` || 'avatar')}
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
            {state.user?.fullName && (
              <p className={'font-bold text-lg text-center leading-8 my-1'}>{state.user.fullName}</p>
            )}
            {state.user?.jobTitle && <p className={'font-lg text-center leading-6'}>{state.user.jobTitle}</p>}
          </div>
          <DiscordActivity user={state.user} />
        </div>
        <div className={'w-full space-y-2'}>
          {state.user?.description && (
            <div className={'bg-medium-spring-green dark:bg-prussian-blue p-3 shadow-sm rounded-lg'}>
              <div className={'flex items-center space-x-2 font-semibold leading-8 mb-3'}>
                <DocumentTextIcon className={'h-6 w-6'} />
                <H2>Description</H2>
              </div>
              <div className={'text-sm m-2'}>
                <p>{state.user.description}</p>
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
              {state.user?.technologies?.length && (
                <div className={'bg-medium-spring-green dark:bg-prussian-blue p-3 shadow-sm rounded-lg md:flex-1'}>
                  <div className={'flex items-center space-x-2 font-semibold leading-8'}>
                    <CodeBracketIcon className={'w-6 h-6'} />
                    <H2>Tecnologies</H2>
                  </div>
                  <ul className={'list-inside list-disc grid grid-cols-2 gap-2 m-2'}>
                    {Array.from(state.user.technologies)
                      ?.sort((a, b) => (a > b ? 1 : -1))
                      .map((technology, index) => (
                        <li key={index}>{technology}</li>
                      ))}
                  </ul>
                </div>
              )}
              {state.user?.education?.length && (
                <div className={'bg-medium-spring-green dark:bg-prussian-blue p-3 shadow-sm rounded-lg md:flex-1'}>
                  <div className={'flex items-center space-x-2 font-semibold leading-8'}>
                    <AcademicCapIcon className={'w-6 h-6'} />
                    <H2>Education</H2>
                  </div>
                  <ul className={'list-inside list-disc grid gap-2 m-2'}>
                    {Array.from(state.user.education)
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
