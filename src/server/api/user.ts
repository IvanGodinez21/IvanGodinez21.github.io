import moment from 'moment';
import Lanyard from '@/classes/lanyard';
import User from '@/classes/user';
import { octokit } from '@/clients/octokit';
import { IUser } from '@/types/user';

export default defineEventHandler(async (event) => {
  switch (event.node.req.method) {
    case 'GET':
      return await GET();
    default:
      throw createError({
        statusCode: 405,
        statusMessage: 'Method Not Allowed',
      });
  }
});

async function GET(): Promise<IUser> {
  return await fetchUser();
}

async function fetchUser(): Promise<IUser> {
  const discord = process.env.DISCORD_ID ? await Lanyard.fetch({ userId: process.env.DISCORD_ID }) : undefined;
  const github = (await octokit.rest.users.getAuthenticated()).data;
  return new User({
    birthdate: process.env.BIRTHDATE ? moment(process.env.BIRTHDATE).toDate() : undefined,
    description: process.env.DESCRIPTION,
    email: process.env.EMAIL,
    education: process.env.EDUCATION?.split(', '),
    fathersName: process.env.FATHERS_NAME,
    firstName: process.env.FIRST_NAME,
    gender: process.env.GENDER,
    jobTitle: process.env.JOB_TITLE,
    mothersName: process.env.MOTHERS_NAME,
    username: process.env.USER_NAME,
    secondaryName: process.env.SECONDARY_NAME,
    social: {
      discord: {
        ...discord,
        id: discord?.discord_user.id ?? process.env.DISCORD_ID,
        username: discord?.discord_user.username ?? process.env.DISCORD_USERNAME,
      },
      facebook: {
        username: process.env.FACEBOOK_USERNAME,
      },
      github: {
        ...github,
        username: github.login ?? process.env.GITHUB_USERNAME,
      },
      linkedin: {
        username: process.env.LINKEDIN_USERNAME,
      },
      telegram: {
        telephone: process.env.TELEGRAM_TELEPHONE_NUMBER
          ? `+${Number(process.env.TELEGRAM_TELEPHONE_NUMBER)}`
          : undefined,
        username: process.env.TELEGRAM_USERNAME,
      },
      twitter: {
        username: process.env.TWITTER_USERNAME,
      },
      whatsapp: {
        telephone: process.env.WHATSAPP_TELEPHONE_NUMBER
          ? `+${Number(process.env.WHATSAPP_TELEPHONE_NUMBER)}`
          : undefined,
      },
    },
    technologies: process.env.TECNOLOGIES?.split(', '),
    telephone: process.env.TELEPHONE_NUMBER ? `+${Number(process.env.TELEPHONE_NUMBER)}` : undefined,
  }).toJSON();
}
