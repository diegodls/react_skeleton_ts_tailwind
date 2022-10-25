interface SkeletonListItemProps {
  index: number;
  arrLength: number;
}

export function SkeletonListItem({ index, arrLength }: SkeletonListItemProps) {
  function calcOpacity(index: number, length: number) {
    const minOpacity: number = 20;
    const maxOpacity: number = 80;

    if (minOpacity >= maxOpacity) {
      return maxOpacity;
    }

    const opacityInterval = (maxOpacity - minOpacity) / (length - 1);
    const finalOpacity =
      (minOpacity + opacityInterval * (length - 1 - index)) / 100; //remover o "length -1" para mudar a ordem

    return Math.floor(finalOpacity).toString();
  }

  return (
    <li className='w-full h-24'>
      <div
        className={`w-full h-full flex flex-row items-center rounded-lg border bg-gray-100 overflow-hidden opacity-[${calcOpacity(
          index,
          arrLength
        )}]`}
      >
        <div className='w-32 h-32 relative left-[-1.2rem] rounded-full bg-gray-300 animate-pulse' />
        <div className='flex flex-col gap-2 animate-pulse'>
          {calcOpacity(index, arrLength)}
          <div className='w-44 h-5 rounded bg-gray-300 ' />
          <div className='w-64 h-5 rounded bg-gray-300' />
        </div>
      </div>
    </li>
  );
}
