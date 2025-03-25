import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return <div className='flex w-full items-center h-full justify-center flex-col gap-4'>

    <Image src='/assets/not-found.png' alt='404' width={556} height={356} className='' />
    <div className='text-center'>
      <h4 className='font-medium text-2xl'>Page not found</h4>
      <p className='my-4'>We can not seem to find the page you are looking for</p>
      <Link href={"/"} >
        <button className='btn border pill bg-white rounded p-2 text-black btn-primary'>GO BACK HOME</button>
      </Link>
    </div>
  </div>
}
