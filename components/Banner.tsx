const Banner = () => {
  return (
    <div
      className='flex flex-col justify-between font-bold px-10 py-5 mb-10
        lg:flex-row lg:space-x-5'>
      <div>
        <h1 className='text-7xl'>Dev Blogoverse</h1>
        <h2
          className='mt-5
            md:mt-8'>
          Greetings to{" "}
          <span className='underline decoration-4 decoration-[#52daf2]'> Every Developer</span>, Get
          your favourite blogs on <span className='text-lg text-[#52daf2]'> Dev Blogoverser</span>
        </h2>
      </div>
      <p
        className='mt-5 text-gray-400 max-w-sm
        md:mt-2 '>
        New product features | The latest in technology | The Weekly Debugging nightmares & More!
      </p>
    </div>
  );
};

export default Banner;
