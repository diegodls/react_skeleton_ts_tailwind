import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import { RandomUserResponse, RandomUserResult } from "./utils/interfaces";
export function App() {
  const [personList, setPersonList] = useState<RandomUserResult[]>([]);

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
    fetchData<RandomUserResponse>("https://randomuser.me/api/?results=50").then(
      (data) => {
        console.log(data.results);
        setPersonList(data.results);
      }
    );
  }, []);

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-gray-100'>
      <div className='w-[500px] h-[500px] flex flex-col items-center gap-2 p-2 rounded-lg overflow-y-auto overflow-x-hidden bg-gray-50 drop-shadow-2xl scrollbar-thumb-zinc-500 hover:scrollbar-thumb-zinc-600 scrollbar-track-transparent scrollbar-thin'>
        {personList && personList.length > 0 ? (
          <ul className='w-full h-full'>
            {personList.map((person: RandomUserResult, index: number) => (
              <ListItem key={index} person={person} />
            ))}
          </ul>
        ) : (
          <h1>Sem pessoas</h1>
        )}
      </div>
    </div>
  );
}
