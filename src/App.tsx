import { useEffect, useState } from "react";
import { EmptyList } from "./components/EmptyList";
import { Footer } from "./components/Footer";
import { List } from "./components/LIst";
import { SearchContactInput } from "./components/SearchContactInput";
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
      <main className='w-full max-w-4xl h-full flex flex-col gap-2 items-center overflow-hidden'>
        <SearchContactInput
          personList={personList}
          personSearch={personSearch}
          setPersonSearch={setPersonSearch}
        />
        <div className='w-full h-full min-h-[350px] rounded-lg bg-gray-50 dark:bg-zinc-800 drop-shadow-2xl overflow-auto'>
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
      </main>
      <Footer />
    </div>
  );
}
