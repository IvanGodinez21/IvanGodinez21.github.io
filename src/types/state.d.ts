import { IRepo } from './repos';
import { IUser } from './user';

export interface IState {
  user?: IUser;
  repos: IRepo[];
  reposPage: number;
  isPartyMode?: boolean;
}
