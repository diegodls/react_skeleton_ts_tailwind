import { useEffect, useState } from "react";
import { EmptyList } from "./components/EmptyList";
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
    <div className='w-screen h-screen flex flex-col items-center overflow-auto bg-gray-100 dark:bg-zinc-900'>
      <main className='w-full max-w-3xl h-full flex flex-col gap-2 items-center'>
        <input
          className='w-3/4 h-12 p-2 mt-1 relative border rounded text-gray-900 dark:border-zinc-600 dark:bg-zinc-800 dark:text-gray-50 disabled:opacity-75'
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
        <div className='w-3/4 h-full min-h-[350px] rounded-lg bg-gray-50 dark:bg-zinc-800 drop-shadow-2xl overflow-auto'>
          {personList && personList.length > 0 ? (
            shownSkeleton ? (
              <SkeletonList />
            ) : personList.length > 0 && filteredPersonList.length > 0 ? (
              <List personList={filteredPersonList} />
            ) : (
              <EmptyList />
            )
          ) : (
            <SkeletonList />
          )}
        </div>
        <button
          type='button'
          className={`w-44 p-2 m-1 rounded font-bold shadow-md border relative transition-all ${
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
        <footer className='w-full h-16 flex flex-col items-center justify-center overflow-hidden bg-gray-100 dark:bg-zinc-700 dark:border-t-zinc-600'>
          <p className='text-white'>
            Desenvolvido por{" "}
            <a href='https://github.com/diegodls' target='_blank'>
              <strong className='text-green-500 transition-all hover:text-green-300'>
                Diego
              </strong>
            </a>
          </p>
          <p className='text-white'>Para fins de estudos 😉</p>
        </footer>
      </main>
    </div>
  );
}
