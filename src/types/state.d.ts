import { IRepo } from './repos';
import { IUser } from './user';

interface IState {
  user?: IUser;
  repos: IRepo[];
  reposPage: number;
  isPartyMode?: boolean;
}
