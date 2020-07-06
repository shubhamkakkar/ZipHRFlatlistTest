import { Dispatch, SetStateAction, useState } from 'react';

export default function useBooleanState(initialState?:boolean)
    :[boolean, ()=> void, Dispatch<SetStateAction<boolean>>] {
  const [bool, setBool] = useState<boolean>(!!initialState);
  function toggleState() {
    setBool(!bool);
  }

  return [bool, toggleState, setBool];
}
