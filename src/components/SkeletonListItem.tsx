import { calcDynamicOpacity } from "../utils/functions/calcDynamicOpacity";

interface SkeletonListItemProps {
  itemIndex: number;
  arrLength: number;
}

export function SkeletonListItem({
  itemIndex,
  arrLength,
}: SkeletonListItemProps) {
  const dynamicOpacity = calcDynamicOpacity(itemIndex, arrLength);

  return (
    <li className={`w-full h-24`} style={{ opacity: `${dynamicOpacity}` }}>
      <div
        className={`w-full h-full flex flex-row items-center rounded-lg border bg-gray-100 dark:bg-zinc-700 dark:border-zinc-600 overflow-hidden `}
      >
        <div className='w-32 h-32 relative left-[-1.2rem] rounded-full bg-gray-300 animate-pulse' />
        <div className='flex flex-col gap-2 animate-pulse'>
          <div className='w-44 h-5 rounded bg-gray-300 ' />
          <div className='w-64 h-5 rounded bg-gray-300' />
        </div>
      </div>
    </li>
  );
}
