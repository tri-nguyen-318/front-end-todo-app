'use client';

import { RootState } from '@/redux/store';
import { toDoActions } from '@/redux/todos/todo.slice';
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  const count = useSelector((state: RootState) => state.todo.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(toDoActions.increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(toDoActions.decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}
