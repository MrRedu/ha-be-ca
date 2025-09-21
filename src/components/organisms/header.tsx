'use client';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <>
      <header className="border-b relative border-b-slate-200 py-4 px-8 flex items-center justify-between">
        <Link href={'/'}>
          <h1 className="sr-only">FiTool</h1>
          <Image
            src={'/fitool.svg'}
            alt="FiTool Logo"
            className="h-8 min-w-[160px]"
            width={160}
            height={32}
          />
        </Link>
      </header>
    </>
  );
};
