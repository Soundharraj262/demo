import React from 'react';

const About = () => {
  return (
    <>
      <div className="min-w-full h-screen 
        bg-red-500   // Default color for small screens (min-width 0px)
        sm:bg-yellow-500  // Min-width 640px
        md:bg-green-500   // Min-width 768px
        lg:bg-blue-500    // Min-width 1024px
        xl:bg-purple-500  // Min-width 1280px
        2xl:bg-pink-500   // Min-width 1536px
      ">
        <h1 className="text-white text-center p-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Resize to see different background colors!
        </h1>
      </div>
    </>
  );
};

export default About;
