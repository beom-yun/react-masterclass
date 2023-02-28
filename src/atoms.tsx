import { atom, selector } from 'recoil';

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    to_do: ['A', 'B', 'C', 'D', 'E', 'F'],
    doing: ['G', 'H', 'I', 'J'],
    done: ['K', 'L'],
  },
});
