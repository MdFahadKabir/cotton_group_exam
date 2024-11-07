import React from "react";
export default function AboutUs() {
  return (
    <>
      <div className="relative  w-full  my-10  md:my-20">
        <div className="absolute inset-0 aboutbg  bg-cover bg-center" />
        <div className="relative flex  flex-col items-center justify-between p-5 md:p-20">
          <div className=" text-center w-full  text-white">
            <p className="text-[27px] md:text-[40px] leading-[40.5px] md:leading-[60px] font-semibold font-poppins ">
              By partnering with our clients to create what matters,
              <br className="hidden md:block"></br>
              we improve the value chain experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
