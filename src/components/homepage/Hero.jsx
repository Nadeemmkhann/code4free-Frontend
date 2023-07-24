import React from 'react';
import { Transition } from '@headlessui/react';
import image from '../../images/image.avif'
import gif from '../../images/gif.gif'
import { Link } from "react-router-dom";
// import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');

const Hero = () => {
  const [showAnimation, setShowAnimation] = React.useState(false);

  React.useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <div className="bg-white text-5xl text-black  py-10 pt-24 ">
      <div className="block tablet:flex  justify-around tablet:pl-4  tablet:w-[100%]">
        <Transition
          show={showAnimation}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className="w-full tablet:pt-10 px-4 tablet:pr-24 text-left  tablet:pr-4 text-justify tablet:w-4/5">
            <h1 className="text-3xl tablet:text-6xl text-center tablet:text-left font-bold mb-2 font-serif" >code4Free</h1>
            <h1 className="text-2xl tablet:text-3xl text-center tablet:text-left font-bold mb-4">Unleash Your Coding Potential for Free</h1>
            <p className="text-xl mt-6">
            Welcome to <span className='font-bold text-xl'>code4Free</span>, your go-to destination for free coding education. Our platform offers a diverse range of coding courses, tutorials, and resources, all completely free of cost. Learn coding, web development, data science, and more from industry experts. Join our vibrant community, engage in hands-on learning, and stay up-to-date with the latest tech trends. No hidden fees or subscriptions - just high-quality, accessible education. Start your coding journey today and seize endless opportunities for growth.
            </p>
          </div>
        </Transition>
        <Transition
          show={showAnimation}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          delay={400}
        >
          <div className=" my-4 tablet:my-0  tablet:pr-10  tablet:w-[450px]   ">
            <img
              src={gif} // Replace with the actual URL of your black and white coding/learning image
              alt="Coding and Learning"
              className="mx-auto h-96 filter "
            />
          </div>
        </Transition>
      </div>
      <div className="w-fit mx-auto ">
                        {/* <button className="p-2  text-xl bg-black text-white hover:text-white hover:bg-slate-600"> */}
                        <Link to="/courses" className="p-2  text-xl bg-black text-white hover:text-white hover:bg-slate-600 hover:text-slate-400">Explore Courses</Link>
                          {/* </button> */}
      </div>
    </div>
  );
};

export default Hero;
