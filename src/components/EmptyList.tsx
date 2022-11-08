import EmptyListSvgIcon from "../assets/svg/EmptyListIcon";

export function EmptyList() {
  return (
    <div className='w-full h-full flex flex-col gap-3 items-center justify-center'>
      <div className='w-28 h-28'>
        <EmptyListSvgIcon />
      </div>
      <p className='dark:text-gray-50'>
        Não foi possível localizar o contato...
      </p>
    </div>
  );
}
