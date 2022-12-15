import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <Image className='rounded-full' src='/1.png' width={50} height={50} alt='' />
        </Link>
        <h1>The Blog Post</h1>
      </div>
      <div>
        <Link
          href='/'
          className='px-5 py-3 text-sm bg-gray-900/70 text-[#52daf2] flex items-center rounded-full 
            md:text-base'>
          Sign-Up To Comment On Post
        </Link>
      </div>
    </header>
  );
};

export default Header;
