import { RandomUserResult } from "../utils/interfaces";

interface ListItemProps {
  person: RandomUserResult;
}

export function ListItem({ person }: ListItemProps) {
  return (
    <li className='w-full h-24'>
      <div className='w-full h-full flex flex-row items-center rounded-lg border border-gray-300 bg-gray-200 overflow-hidden'>
        <img
          src={person.picture.large}
          alt={`${person.name.first}' profile picture`}
          className='w-32 h-32 relative left-[-1.2rem] rounded-full'
        />
        <div>
          <p className='text-gray-900'>
            {person.name.first} {person.name.last}
          </p>
          <p className='text-gray-600'>{person.email}</p>
        </div>
      </div>
    </li>
  );
}
