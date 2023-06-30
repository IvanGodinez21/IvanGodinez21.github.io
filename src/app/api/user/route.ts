import User from '@/classes/user';
import { NextResponse } from 'next/server';
import { octokit } from '@/clients/octokit';
import Lanyard from '@/classes/lanyard';

export async function GET() {
  return NextResponse.json(await fetchUser());
}

async function fetchUser() {
  const discord = process.env.NEXT_PUBLIC_DISCORD_ID
    ? await Lanyard.fetch({ userId: process.env.NEXT_PUBLIC_DISCORD_ID })
    : undefined;
  const github = (await octokit.rest.users.getAuthenticated()).data;

  return new User({
    birthdate: process.env.BIRTHDATE,
    email: process.env.EMAIL,
    fathersName: process.env.FATHERS_NAME,
    firstName: process.env.FIRST_NAME,
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
    telephone: process.env.TELEPHONE_NUMBER ? `+${Number(process.env.TELEPHONE_NUMBER)}` : undefined,
  });
}
