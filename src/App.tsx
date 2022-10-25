import { useEffect, useState } from "react";
import { List } from "./components/LIst";
import { SkeletonList } from "./components/SkeletonList";
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
    fetchData<RandomUserResponse>(
      "https://randomuser.me/api/?results=50&seed=githubdiegodls"
    ).then((data) => {
      console.log(data.results);

      setTimeout(() => {
        setPersonList(data.results);
      }, 3000);
    });
  }, []);

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-gray-100'>
      <div className='w-[500px] h-[500px] rounded-lg bg-gray-50 drop-shadow-2xl'>
        {personList && personList.length > 0 ? (
          <SkeletonList />
        ) : (
          <List personList={personList} />
        )}
      </div>
    </div>
  );
}
