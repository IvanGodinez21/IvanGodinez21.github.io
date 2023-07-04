import DiscordActivity from '@/components/cards/discord_activity';
import H2 from '@/components/typography/h2';
import Image from 'next/image';
import moment from 'moment';
import { AcademicCapIcon, CodeBracketIcon, DocumentTextIcon } from '@heroicons/react/24/solid';
import { getUser } from '@/utils/getUser';

export default async function AboutxPage() {
  const user = await getUser();
  const aboutCells = [
    { title: 'First name', value: user.firstName },
    { title: 'Secondary name', value: user.secondaryName },
    { title: "Father's last name", value: user.fathersName },
    { title: "Mother's last name", value: user.mothersName },
    { title: 'Gender', value: user.gender },
    { title: 'Birthdate', value: moment(user.birthdate).format('L') },
    { title: 'Age', value: user.age },
    { title: 'Birthday', value: moment(user.birthday?.date).format('L') },
  ];

  return (
    <div className={'h-fit w-full m-2'}>
      <div className={'md:flex no-wrap md:space-x-2 max-md:space-y-2'}>
        <div className={'col-span-2 w-full md:w-3/12 space-y-2'}>
          <div
            className={
              'bg-medium-spring-green dark:bg-prussian-blue p-3 rounded-lg flex flex-col justify-center items-center'
            }
          >
            <Image
              src={user.social.github.avatar_url}
              alt={user.social.github.username ?? (`${user.social.github.username} avatar` || 'avatar')}
              priority
              className={'h-auto w-fit mx-auto rounded-full'}
              sizes={'70vw'}
              width={0}
              height={0}
            />
          </div>
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
          <div className={'bg-medium-spring-green dark:bg-prussian-blue p-3 shadow-sm rounded-lg'}>
            <div className={'flex items-center space-x-2 font-semibold leading-8 mb-3'}>
              <DocumentTextIcon className={'h-6 w-6'} />
              <H2>About</H2>
            </div>
            <div>
              <div className={'grid md:grid-cols-2 text-sm'}>
                {aboutCells.map(
                  (cell, index) =>
                    cell.value && (
                      <div key={index} className={'grid grid-cols-2'}>
                        <p className={'px-4 py-2 font-semibold'}>{cell.title}</p>
                        <p className={'px-4 py-2'}>{cell.value}</p>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
          <div>
            <div className={'grid md:grid-cols-2 max-md:space-y-2 md:space-x-2 text-sm'}>
              <div className={'bg-medium-spring-green dark:bg-prussian-blue p-3 shadow-sm rounded-lg'}>
                <div className={'flex items-center space-x-2 font-semibold leading-8 mb-3'}>
                  <CodeBracketIcon className={'w-6 h-6'} />
                  <H2>Tecnologies</H2>
                </div>
                <ul className={'list-inside list-disc grid grid-cols-2 gap-2'}>
                  {user.technologies?.length ? (
                    user.technologies
                      ?.sort((a, b) => (a > b ? 1 : -1))
                      .map((technology, index) => <li key={index}>{technology}</li>)
                  ) : (
                    <li>{'None'}</li>
                  )}
                </ul>
              </div>
              <div className={'bg-medium-spring-green dark:bg-prussian-blue p-3 shadow-sm rounded-lg'}>
                <div className={'flex items-center space-x-2 font-semibold leading-8 mb-3'}>
                  <AcademicCapIcon className={'w-6 h-6'} />
                  <H2>Education</H2>
                </div>
                <ul className={'list-inside list-disc grid gap-2'}>
                  {user.education?.length ? (
                    user.education
                      ?.sort((a, b) => (a > b ? 1 : -1))
                      .map((school, index) => <li key={index}>{school}</li>)
                  ) : (
                    <li>{'None'}</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
