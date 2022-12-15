import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className='flex items-center justify-start p-5'>
        <Link href='/' className='text-[#52daf2] flex items-center'>
          <ArrowUturnLeftIcon className='h-6 w-6 text-[#52daf2] mr-2' />
          Go To Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
