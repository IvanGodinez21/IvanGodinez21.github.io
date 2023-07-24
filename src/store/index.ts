import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import stateReducer from './state';
import { AppDispatch, RootState } from '@/types/store';

export const store = configureStore({
  reducer: {
    state: stateReducer,
  },
});

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
