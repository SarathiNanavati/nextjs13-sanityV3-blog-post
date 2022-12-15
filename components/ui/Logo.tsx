import React from "react";

const Logo = (props: any) => {
  return (
    <div className='flex items-center space-x-2'>
      <div className='flex items-center justify-center font-bold text-[#52daf2] text-lg rounded-full w-10 h-10 bg-slate-600/30'>
        BP
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default Logo;
