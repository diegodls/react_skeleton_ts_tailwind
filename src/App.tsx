import { useEffect, useState } from "react";
import { List } from "./components/LIst";
import { SkeletonList } from "./components/SkeletonList";
import { RandomUserResponse, RandomUserResult } from "./utils/interfaces";
export function App() {
  const [personList, setPersonList] = useState<RandomUserResult[]>([]);

  const [personSearch, setPersonSearch] = useState<string>("");

  const filteredPersonList: RandomUserResult[] =
    personSearch.length > 0
      ? personList.filter((person) => {
          if (
            person.name.first
              .toLocaleLowerCase()
              .includes(personSearch.toLocaleLowerCase()) ||
            person.name.last
              .toLocaleLowerCase()
              .includes(personSearch.toLocaleLowerCase())
          ) {
            return person;
          }
        })
      : personList;

  async function fetchData<T>(url: string): Promise<T> {
    return await fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<T>;
      })
      .then((data) => {
        return data;
      });
  }

  useEffect(() => {
    fetchData<RandomUserResponse>(
      "https://randomuser.me/api/?results=50&seed=githubdiegodls"
    ).then((data) => {
      setPersonList(data.results);
    });
  }, []);

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-zinc-900'>
      <input
        className='w-3/4 h-12 min-w-[350px] p-2 border rounded text-gray-900 dark:border-zinc-600 dark:bg-zinc-800 dark:text-gray-50 disabled:opacity-75'
        placeholder='Localizar contato...'
        type='search'
        disabled={personList.length <= 0}
        value={personSearch}
        onChange={(
          event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          setPersonSearch(event.target.value);
        }}
      />
      <div className='w-3/4 h-[500px] min-w-[350px] mt-2 rounded-lg bg-gray-50 dark:bg-zinc-800 drop-shadow-2xl overflow-hidden'>
        {personList && personList.length > 0 ? (
          <List personList={filteredPersonList} />
        ) : (
          <SkeletonList />
        )}
      </div>
    </div>
  );
}
