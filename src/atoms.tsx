import { atom, selector } from 'recoil';

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    'To Do': ['A', 'B', 'C', 'D', 'E', 'F'],
    Doing: ['G', 'H', 'I', 'J'],
    Done: ['K', 'L'],
  },
});
