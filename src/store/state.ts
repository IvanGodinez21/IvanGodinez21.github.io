import { defineStore } from 'pinia';
import { IState } from '@/types/state';

export const initialState: IState = {
  user: undefined,
  repos: [],
  reposPage: 1,
  isPartyMode: undefined,
};

export const useStateStore = defineStore('state', () => {
  const state = ref(initialState);

  const actions = {
    setUser({ value }: { value: IState['user'] }) {
      state.value.user = value;
    },
    setRepos({ value }: { value: IState['repos'] }) {
      state.value.repos = value;
    },
    setReposPage({ value }: { value: IState['reposPage'] }) {
      state.value.reposPage = value;
    },
    setPartyMode({ value }: { value: IState['isPartyMode'] }) {
      state.value.isPartyMode = value;
    },
  };
  return { state, ...actions };
});
