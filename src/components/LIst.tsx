import { RandomUserResult } from "../utils/interfaces";
import ListItem from ".//ListItem";

interface ListProps {
  personList: RandomUserResult[];
}

export function List({ personList }: ListProps) {
  return (
    <ul className='w-full h-full flex flex-col gap-2 p-2 pr-4 overflow-y-auto overflow-x-hidden scrollbar-thumb-zinc-500 hover:scrollbar-thumb-zinc-600 scrollbar-track-zinc-300  scrollbar-thin'>
      {personList.map((person: RandomUserResult, index: number) => (
        <ListItem key={index} person={person} />
      ))}
    </ul>
  );
}
