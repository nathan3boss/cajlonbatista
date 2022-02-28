// Dependencies
import { AnyAction, createStore } from 'redux';

export interface APP {
  theme: string;
}

const INITIAL: APP = {
  theme: 'tau-light'
};

const reducer: any = (state: APP, action: AnyAction) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export const store = createStore(reducer, INITIAL);
