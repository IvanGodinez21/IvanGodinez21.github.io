'use client';

import moment from 'moment';
import { useRef } from 'react';
import { store } from '@/store/index';
import { actions } from '@/store/state';
import { IPreloaderProps } from '@/types/preloader';

export default function Preloader({ state }: { state: IPreloaderProps }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(actions.setUser(state.user));
    store.dispatch(
      actions.setPartyMode(moment().isSame(moment(state.user.birthday), 'day')),
    );
    loaded.current = true;
  }
  return null;
}
