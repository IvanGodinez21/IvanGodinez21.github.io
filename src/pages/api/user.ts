import { NextApiRequest, NextApiResponse } from 'next';
import { octokit } from '@/clients/octokit';
import User from '@/classes/user';

export default async function UserHandler(req: NextApiRequest, res: NextApiResponse<User>) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const github = await octokit.rest.users.getAuthenticated();

  const user = new User({
    birthdate: process.env.BIRTHDATE,
    email: process.env.EMAIL,
    fathersName: process.env.FATHERS_NAME,
    firstName: process.env.FIRST_NAME,
    mothersName: process.env.MOTHERS_NAME,
    username: process.env.USER_NAME,
    secondaryName: process.env.SECONDARY_NAME,
    social: {
      facebook: {
        username: process.env.FACEBOOK_USERNAME,
      },
      github: {
        ...github.data,
        username: github.data.login ?? process.env.GITHUB_USERNAME,
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
  res.status(200).json(user);
}
