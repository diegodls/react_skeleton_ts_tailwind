import { memo } from "react";
import { RandomUserResult } from "../utils/interfaces";

interface ListItemProps {
  person: RandomUserResult;
}

function ListItem({ person }: ListItemProps) {
  return (
    <li className='w-full h-24 animate-fadeIn list-none transition-all hover:translate-y-[-2px] hover:drop-shadow-md'>
      <div className='w-full h-full flex flex-row items-center rounded-lg border bg-gray-100 overflow-hidden hover:border-gray-400 transition-all dark:bg-zinc-700 dark:border-zinc-600 cursor-pointer'>
        <img
          src={person.picture.large}
          alt={`${person.name.first} profile picture`}
          title={`${person.name.first} profile picture`}
          className='w-28 h-28 md:w-32 md:h-32 relative left-[-1.4rem] md:left-[-1.2rem] rounded-full'
        />
        <div>
          <p className='text-gray-900 dark:text-gray-50'>
            {person.name.first} {person.name.last}
          </p>
          <p className='text-gray-600 text-xs md:text-base dark:text-gray-400'>
            {person.email}
          </p>
        </div>
      </div>
    </li>
  );
}

export default memo(ListItem);
