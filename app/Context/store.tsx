'use client';
import { Word } from '../../typings';
 
import { createContext, useContext, Dispatch, SetStateAction, useState} from 'react';

interface ContextProps {
  words: Word[],
  setWords: Dispatch<SetStateAction<Word[]>>
  data: Word[],
  setData: Dispatch<SetStateAction<Word[]>>
}

const GlobalContext = createContext<ContextProps>({
  words: [],
  setWords: () : Word[]=> [],
  data:[],
  setData: (): Word[] => [],
})

export const GlobalContextProvider = ({children}) => {
  const [ words, setWords] = useState<[]|Word[]>([]);
  const [ data, setData] = useState<[]|Word[]>([]);

  return(
    <GlobalContext.Provider value={{words, setWords, data, setData}}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext);