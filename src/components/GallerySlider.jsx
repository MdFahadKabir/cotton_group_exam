"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import image1 from "../../public/images/gallary1.png";
import image2 from "../../public/images/gallary2.png";
import image3 from "../../public/images/gallary3.png";
import image4 from "../../public/images/gallary4.png";
import image5 from "../../public/images/gallary5.png";
import Image from "next/image";

const GallerySlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);

  const images = [image1, image2, image3, image4, image5];
  const slideDuration = 5000;

  return (
    <div className="mx-5 my-10 md:mx-40 md:my-20">
      <div className="hidden md:block">
        <div className="flex ">
          <div className="w-4/5 relative">
            <Swiper
              spaceBetween={10}
              autoplay={{
                delay: slideDuration,
                disableOnInteraction: false,
              }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Autoplay, Thumbs]}
              loop={true}
              onSwiper={setMainSwiper}
              className="main-slider"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={src}
                    alt={`Slide ${index}`}
                    className="w-full h-auto rounded-md"
                    height={400}
                    width={400}
                  />

                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 h-2 bg-white bg-opacity-40 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 duration-bar"
                      style={{
                        animation: `fillProgress ${slideDuration}ms linear infinite`,
                      }}
                    ></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mx-2"></div>

          <div className="w-1/5">
            <Swiper
              onSwiper={setThumbsSwiper}
              direction="vertical"
              slidesPerView={3.5}
              spaceBetween={0.1}
              loop={true}
              autoplay={{
                delay: slideDuration,
                disableOnInteraction: false,
              }}
              speed={1000}
              watchSlidesProgress
              className="thumb-slider"
              style={{ maxHeight: "540px", overflow: "hidden" }}
            >
              {images.map((src, index) => (
                <SwiperSlide key={index} className="cursor-pointer">
                  <Image
                    src={src}
                    alt={`Thumbnail ${index}`}
                    className="w-full h-auto rounded-md"
                    height={400}
                    width={400}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="cursor-pointer">
              <Image
                src={src}
                alt={`Thumbnail ${index}`}
                className="w-full h-auto rounded-md"
                height={400}
                width={400}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* CSS for the Progress Bar Animation */}
      <style jsx>{`
        @keyframes fillProgress {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }
        .duration-bar {
          animation-duration: ${slideDuration}ms;
        }
      `}</style>
    </div>
  );
};

export default GallerySlider;
