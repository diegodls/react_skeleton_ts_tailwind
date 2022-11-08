export function Footer() {
  return (
    <footer className='w-full h-16 flex flex-col items-center justify-center overflow-hidden bg-gray-100 dark:text-white dark:bg-zinc-700 dark:border-t-zinc-600'>
      <p>
        {" "}
        Feito com{" "}
        <span role='img' aria-label='coração'>
          ❤
        </span>{" "}
        por{" "}
        <a href='https://github.com/diegodls' target='_blank'>
          <strong className='text-green-500 transition-all hover:text-green-300'>
            Diego
          </strong>
        </a>
      </p>
      <p className='text-white'>
        Para fins de estudos{" "}
        <span role='img' aria-label='piscada'>
          😉
        </span>
      </p>
    </footer>
  );
}
