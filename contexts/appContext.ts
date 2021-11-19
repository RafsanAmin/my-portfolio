import { createContext, Dispatch } from 'react';

type State = {
  counter: number;
  date: string;
  cont: [number, number];
};
type Action =
  | {
      type: 'COUNTER';
    }
  | {
      type: 'DATE';
    }
  | {
      type: 'CONT';
      value: [number, number];
    };

const AppContext = createContext<[State, Dispatch<Action>]>([
  {
    cont: [0, 0],
    counter: 0,
    date: new Date().toLocaleTimeString(),
  },
  () => {},
]);

export { AppContext };
export type { State, Action };
