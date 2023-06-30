import { IUser } from '@/types/user.js';
import Menu from '../menu';

export default async function Header({ user }: { user: IUser }) {
  return (
    <div className={'p-2 shadow bg-emerald text-gunmetal'}>
      <Menu user={user} />
    </div>
  );
}
