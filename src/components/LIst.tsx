import { RandomUserResult } from "../utils/interfaces";
import ListItem from "./ListItem";

interface ListProps {
  personList: RandomUserResult[];
}

export function List({ personList }: ListProps) {
  return (
    <ul className='w-full h-full flex flex-col gap-2 p-2 pr-4 scrollbar-thin scrollbar-thumb-zinc-500 hover:scrollbar-thumb-zinc-600 scrollbar-track-zinc-300 dark:scrollbar-thumb-zinc-300 dark:hover:scrollbar-thumb-zinc-200 dark:scrollbar-track-zinc-600'>
      {personList.map((person: RandomUserResult, index: number) => (
        <ListItem key={index} person={person} />
      ))}
    </ul>
  );
}
