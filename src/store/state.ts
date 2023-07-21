import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IState } from '@/types/state';

export const initialState: IState = {
  user: undefined,
  repos: [],
  reposPage: 1,
  isPartyMode: undefined,
};

const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IState['user']>) {
      state.user = action.payload;
    },
    setRepos(state, action: PayloadAction<IState['repos']>) {
      state.repos = action.payload;
    },
    setReposPage(state, action: PayloadAction<IState['reposPage']>) {
      state.reposPage = action.payload;
    },
    setPartyMode(state, action: PayloadAction<IState['isPartyMode']>) {
      state.isPartyMode = action.payload;
    },
  },
});

export const actions = stateSlice.actions;
export default stateSlice.reducer;
