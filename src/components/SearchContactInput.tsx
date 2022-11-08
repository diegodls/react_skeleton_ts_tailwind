import { RandomUserResult } from "../utils/interfaces";

type SearchContactProps = {
  personList: RandomUserResult[];
  personSearch: string;
  setPersonSearch: React.Dispatch<React.SetStateAction<string>>;
};

export function SearchContactInput({
  personList,
  personSearch,
  setPersonSearch,
}: SearchContactProps) {
  return (
    <input
      className='w-full h-12 p-2 mt-1 relative border rounded text-gray-900 dark:border-zinc-600 dark:bg-zinc-800 dark:text-gray-50 disabled:opacity-75'
      placeholder='Localizar contato...'
      aria-label='Localizar contato'
      type='search'
      disabled={personList.length <= 0}
      value={personSearch}
      onChange={(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        setPersonSearch(event.target.value);
      }}
    />
  );
}
