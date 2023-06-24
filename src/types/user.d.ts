import { Octokit } from 'octokit';

export interface IUser {
  birthdate?: Date | string | null;
  birthday?: string;
  email?: string;
  fathersName?: string;
  firstName?: string;
  fullName?: string;
  mothersName?: string;
  username?: string;
  secondaryName?: string;
  social: {
    facebook: {
      username?: string;
    };
    github: Awaited<ReturnType<Octokit['rest']['users']['getAuthenticated']>>['data'] & { username?: string };
    linkedin: {
      username?: string;
    };
    telegram: {
      telephone?: IUser['telephone'];
      username?: string;
    };
    twitter: {
      username?: string;
    };
    whatsapp: {
      telephone?: IUser['telephone'];
    };
  };
  telephone?: `+${number}`;
  nextBirthDay?: {
    date: Date;
    countdown: {
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    };
  };
}
