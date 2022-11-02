import { useEffect, useState } from "react";
import { List } from "./components/LIst";
import { SkeletonList } from "./components/SkeletonList";
import { RandomUserResponse, RandomUserResult } from "./utils/interfaces";
export function App() {
  const [personList, setPersonList] = useState<RandomUserResult[]>([]);

  const [personSearch, setPersonSearch] = useState<string>("");
  const [shownSkeleton, setShownSkeleton] = useState<boolean>(false);

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
      <div className='w-3/4 min-w-[350px] h-[500px] mt-2 rounded-lg bg-gray-50 dark:bg-zinc-800 drop-shadow-2xl relative overflow-auto'>
        {personList && personList.length > 0 ? (
          shownSkeleton ? (
            <SkeletonList />
          ) : (
            <List personList={filteredPersonList} />
          )
        ) : (
          <SkeletonList />
        )}
      </div>
      <button
        type='button'
        className={`w-44 p-2 m-2 rounded font-bold shadow-md border transition-all ${
          shownSkeleton
            ? "bg-green-500 border-green-500 text-zinc-900 hover:bg-green-600"
            : "bg-zinc-900 hover:bg-zinc-800 dark:border-green-500 dark:text-green-500 hover:dark:bg-green-900"
        }
        `}
        onClick={() => {
          setShownSkeleton(!shownSkeleton);
        }}
      >
        Mostrar {shownSkeleton ? "Lista" : "Skeleton"}
      </button>
      <footer className='w-full h-12 flex flex-col items-center justify-center relative bottom-0 bg-gray-100 dark:bg-zinc-700 dark:border-t-zinc-600'>
        <p className='text-white'>
          Projeto desenvolvido por{" "}
          <a href='https://github.com/diegodls' target='_blank'>
            <strong className='text-green-500 hover:text-green-300'>
              Diego
            </strong>
          </a>
        </p>
        <p className='text-white'>Para fins de estudos 😉</p>
      </footer>
    </div>
  );
}
