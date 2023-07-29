import {
  AcademicCapIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  FingerPrintIcon,
} from '@heroicons/react/24/solid';
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
    {
      title: 'Birthdate',
      value: state.user?.birthdate
        ? moment(state.user.birthdate).format('L')
        : undefined,
    },
    { title: 'Age', value: state.user?.age },
    {
      title: 'Birthday',
      value: state.user?.birthday
        ? moment(state.user.birthday).format('L')
        : undefined,
    },
  ];

  return (
    <div className={'m-2 h-fit w-full'}>
      <div className={'no-wrap max-md:space-y-2 md:flex md:space-x-2'}>
        <div className={'sticky col-span-2 w-full space-y-2 md:w-3/12'}>
          {state.user?.social.github.avatar_url && (
            <div
              className={
                'flex flex-col items-center justify-center rounded-lg bg-medium-spring-green p-3 dark:bg-prussian-blue'
              }
            >
              <Image
                src={state.user.social.github.avatar_url}
                alt={
                  state.user.social.github.username ??
                  (`${state.user.social.github.username} avatar` || 'avatar')
                }
                priority
                className={
                  'mx-auto h-auto rounded-full max-sm:w-[43vw] sm:w-[43vw] lg:w-[70vw]'
                }
                sizes={'70vw, 43vw, 43vw'}
                width={0}
                height={0}
              />
            </div>
          )}
          <div
            className={
              'flex flex-col items-center justify-center rounded-lg bg-medium-spring-green p-3 dark:bg-prussian-blue'
            }
          >
            {state.user?.fullName && (
              <p className={'my-1 text-center text-lg font-bold leading-8'}>
                {state.user.fullName}
              </p>
            )}
            {state.user?.jobTitle && (
              <p className={'font-lg text-center leading-6'}>
                {state.user.jobTitle}
              </p>
            )}
          </div>
          <DiscordActivity user={state.user} />
        </div>
        <div className={'w-full space-y-2'}>
          {state.user?.description && (
            <div
              className={
                'rounded-lg bg-medium-spring-green p-3 shadow-sm dark:bg-prussian-blue'
              }
            >
              <div
                className={
                  'mb-3 flex items-center space-x-2 font-semibold leading-8'
                }
              >
                <DocumentTextIcon className={'h-6 w-6'} />
                <H2>Description</H2>
              </div>
              <div className={'m-2 text-sm'}>
                <p>{state.user.description}</p>
              </div>
            </div>
          )}
          {aboutCells.filter((cell) => cell.value).length > 0 && (
            <div
              className={
                'rounded-lg bg-medium-spring-green p-3 shadow-sm dark:bg-prussian-blue'
              }
            >
              <div
                className={
                  'mb-3 flex items-center space-x-2 font-semibold leading-8'
                }
              >
                <FingerPrintIcon className={'h-6 w-6'} />
                <H2>Information</H2>
              </div>
              <div className={'m-2 grid gap-2 text-sm md:grid-cols-2'}>
                {aboutCells.map(
                  (cell, index) =>
                    cell.value && (
                      <div key={index} className={'grid grid-cols-2 gap-2'}>
                        <p className={'font-semibold'}>{cell.title}</p>
                        <p>{cell.value}</p>
                      </div>
                    ),
                )}
              </div>
            </div>
          )}
          <div>
            <div
              className={
                'text-sm max-md:grid max-md:space-y-2 md:flex md:space-x-2'
              }
            >
              {state.user?.technologies?.length && (
                <div
                  className={
                    'rounded-lg bg-medium-spring-green p-3 shadow-sm dark:bg-prussian-blue md:flex-1'
                  }
                >
                  <div
                    className={
                      'flex items-center space-x-2 font-semibold leading-8'
                    }
                  >
                    <CodeBracketIcon className={'h-6 w-6'} />
                    <H2>Tecnologies</H2>
                  </div>
                  <ul
                    className={
                      'm-2 grid list-inside list-disc grid-cols-2 gap-2'
                    }
                  >
                    {Array.from(state.user.technologies)
                      ?.sort((a, b) => (a > b ? 1 : -1))
                      .map((technology, index) => (
                        <li key={index}>{technology}</li>
                      ))}
                  </ul>
                </div>
              )}
              {state.user?.education?.length && (
                <div
                  className={
                    'rounded-lg bg-medium-spring-green p-3 shadow-sm dark:bg-prussian-blue md:flex-1'
                  }
                >
                  <div
                    className={
                      'flex items-center space-x-2 font-semibold leading-8'
                    }
                  >
                    <AcademicCapIcon className={'h-6 w-6'} />
                    <H2>Education</H2>
                  </div>
                  <ul className={'m-2 grid list-inside list-disc gap-2'}>
                    {Array.from(state.user.education)
                      ?.sort((a, b) => (a > b ? 1 : -1))
                      .map((school, index) => <li key={index}>{school}</li>)}
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
