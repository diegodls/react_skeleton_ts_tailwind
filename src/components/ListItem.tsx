import { memo } from "react";
import { RandomUserResult } from "../utils/interfaces";

interface ListItemProps {
  person: RandomUserResult;
}

function ListItem({ person }: ListItemProps) {
  return (
    <li className='w-full h-24 animate-fadeIn'>
      <div className='w-full h-full flex flex-row items-center rounded-lg border bg-gray-100 overflow-hidden hover:border-gray-300 hover:translate-y-[-2px]  hover:drop-shadow-md transition-all relative dark:bg-zinc-700 dark:border-zinc-600'>
        <img
          src={person.picture.large}
          alt={`${person.name.first}' profile picture`}
          className='w-32 h-32 relative left-[-1.2rem] rounded-full'
        />
        <div>
          <p className='text-gray-900 dark:text-gray-50'>
            {person.name.first} {person.name.last}
          </p>
          <p className='text-gray-600 dark:text-gray-400'>{person.email}</p>
        </div>
      </div>
    </li>
  );
}

export default memo(ListItem);
