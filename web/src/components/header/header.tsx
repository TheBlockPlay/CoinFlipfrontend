import Link from 'next/link';
import { FC, Suspense } from 'react';
import { Skeleton } from '../ui/skeleton';
import { FCLogo } from './fc-logo';
import { Profile } from './profile';

export const Header: FC = async () => {
  return (
    <header className='' style={{backgroundColor:"#021730"}}>
      <nav
        className='grid grid-cols-3 items-center justify-between px-6 py-2 lg:px-8'
        aria-label='Global'
      >
        <div className='flex items-center gap-6'>
          <Link
            className='flex items-center gap-2 text-2xl font-semibold'
            href='/'
          >
            <FCLogo className='w-14 ' />
            <span className='text-xs text-muted-foreground text-red-800'>(mainnet)</span>
          </Link>
        </div>
        <div className='mx-auto flex items-center gap-4 text-sm'></div>
        <div className='justify-self-end'>
          <Suspense
            fallback={
              <Skeleton className='ml-auto h-10 w-32 bg-muted-foreground/30' />
            }
          >
            <Profile />
          </Suspense>
        </div>
      </nav>
    </header>
  );
};
