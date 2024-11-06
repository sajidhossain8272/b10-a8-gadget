const Banner = () => {
  return (
    <div className='lg:relative flex lg:-mt-56 justify-center'>
      <div className='border-white shadow-2xl border-2 p-4 bg-transparent rounded-3xl'>
        <img
          width={1062}
          className='lg:h-[563px] rounded-3xl'
          src='/banner.jpg'
          alt=''
        />
      </div>
    </div>
  );
};

export default Banner;
