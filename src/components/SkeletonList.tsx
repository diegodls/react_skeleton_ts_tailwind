import { SkeletonListItem } from "./SkeletonListItem";

export function SkeletonList() {
  const mockArray = Array(4).fill(null);

  return (
    <ul className='w-full h-full flex flex-col gap-2 p-2 overflow-y-auto overflow-x-hidden scrollbar-thumb-zinc-500 hover:scrollbar-thumb-zinc-600 scrollbar-track-zinc-300 scrollbar-thin'>
      {mockArray.map((_, index: number) => (
        <SkeletonListItem
          key={index}
          index={index}
          arrLength={mockArray.length}
        />
      ))}
    </ul>
  );
}
