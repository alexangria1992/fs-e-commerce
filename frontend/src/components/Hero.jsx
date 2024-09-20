import { assets } from '../assets/frontend_assets/assets';

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* HERO LEFT SIDE */}
      <div className='w-full  flex items-center justify-center py-10 sm:py-0 sm:w-1/2'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141] '></p>
            <p className='font-medium text-sm md:text-base '>OUR BESTSELLERS</p>
          </div>
          <h1 className='prata-regular text-3xl leading-relaxed sm:py-3 lg:text-5xl'>
            Latest Arrivals
          </h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-8 h-[1px] bg-[#414141] md:w-11 '></p>
          </div>
        </div>
      </div>

      {/* HERO RIGHT SIDE */}
      <img src={assets.hero_img} className='w-full sm:w-1/2' alt='' />
    </div>
  );
};

export default Hero;
