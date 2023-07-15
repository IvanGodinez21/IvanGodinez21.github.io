import { ILanyardResponse } from './lanyard';
import { Octokit } from 'octokit';

export interface IUserConstructor {
  birthdate?: Date;
  description?: string;
  email?: string;
  fathersName?: string;
  firstName?: string;
  gender?: '♂️' | '♀️' | '⚧️' | '❓' | string;
  jobTitle?: string;
  mothersName?: string;
  secondaryName?: string;
  education?: string[];
  social: {
    discord: { username?: string; id?: string } & Partial<ILanyardResponse>;
    facebook: {
      username?: string;
    };
    github: Awaited<ReturnType<Octokit['rest']['users']['getAuthenticated']>>['data'] & { username?: string };
    linkedin: {
      username?: string;
    };
    telegram: {
      telephone?: IUserConstructor['telephone'];
      username?: string;
    };
    twitter: {
      username?: string;
    };
    whatsapp: {
      telephone?: IUserConstructor['telephone'];
    };
  };
  technologies?: string[];
  telephone?: `+${number}`;
  username?: string;
}

export interface IUser extends IUserConstructor {
  age?: number;
  birthday?: {
    countDown: {
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    };
    date: Date;
  };
  fullName?: string;
}
