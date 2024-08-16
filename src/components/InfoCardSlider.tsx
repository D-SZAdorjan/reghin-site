"use client";
import { PrismaClient, notable_personalities as Person, buildings as Building, churches as  Church} from "@prisma/client";
import {
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faClock,
  faHeart,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import GridRow from "./general/GridRow";
import NavigationButton from "./general/NavigationButton";

interface ComponentProps {
  personsJson: Person[];
  buildingsJson: Building[];
  churchesJson: Church[];
}

const InfoCardSlider: React.FC<ComponentProps> = ({
  personsJson = [],
  buildingsJson = [],
  churchesJson = [],
}) => {
  return (
    <div className="container mx-auto">
      <GridRow>
        <div className="flex-[0_0_auto] -gap-1.5 box-border max-w-full px-[calc(30px*0.5)] pt-0">
          <h2 className="transition duration-[800ms] text-2xl">
            Trending Destinations
          </h2>
        </div>
        <div className="flex-[0_0_auto] -gap-1.5 box-border max-w-full px-[calc(30px*0.5)] pt-0">
          <Link href="/">
            <span>See all</span>
            <FontAwesomeIcon
              icon={faArrowUp}
              className="ms-2.5 text-base rotate-45"
            />
          </Link>
        </div>
      </GridRow>
      <div>
        <div className="pt-14 relative">
          <div className="transition duration-300 relative opacity-1 visible">
            <div>
              <Swiper
                spaceBetween={30}
                navigation={{
                  prevEl: ".js-slider1-prev",
                  nextEl: ".js-slider1-next",
                  disabledClass: "text-gray-500 cursor-default",
                }}
                modules={[Navigation, Pagination]}
                style={{ overflow: "visible", maxWidth: "100%" }}
                breakpoints={{
                  500: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
              >
                {personsJson.map((item, index) => (
                  <SwiperSlide key={`${index}_${item.id}`}>
                    <Link
                      href="/"
                      className="tour-card transition duration-150 block rounded-2xl overflow-hidden bg-white hover:shadow-md"
                    >
                      <div className="tour-card-header relative box-border">
                        <div className="tour-card-image relative z-0 overflow-hidden block before:w-full before:block before:pb-[71.42857%]">
                          <Image
                            className="absolute top-0 start-0 w-full h-full object-cover"
                            src={"/img/1.png"}
                            width={421}
                            height={301}
                            alt="Card Image"
                          />
                          <div className="tour-card-shape absolute bottom-0 start-0 end-0 h-6 bg-white pointer-events-none rounded-t-2xl"></div>
                        </div>
                        <button className="tour-card-favourite top-5 end-5 absolute flex justify-center items-center w-9 h-9 rounded-full bg-white shadow-xs transition duration-150 cursor-pointer text-black">
                          <FontAwesomeIcon icon={faHeart} />
                        </button>
                      </div>
                      <div className="tour-card-content px-5 py-2.5">
                        <div className="tour-card-location flex items-center text-[#717171] text-xs">
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            className="flex items-center text-base text-[#717171] me-1"
                          />
                          Paris, France
                        </div>
                        <h3 className="tour-card-title mt-1 font-medium text-base leading-normal text-[#05073c] m-0">
                          <span
                            style={{
                              transition:
                                "background-size 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s",
                            }}
                            className="bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_1px] hover:bg-[length:100%_1px] bg-[0px_95%] py-[0.1%] px-0"
                          >
                            {`${item.last_name} ${item.first_name}`}
                          </span>
                        </h3>
                        <div className="tour-card-rating mt-1 text-xs">
                          <div className="flex items-center">
                            <span className="text-xs text-[#05073C]">
                              {
                                item.lead?.toString()
                              }
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center pt-2.5 mt-2.5 border-t border-solid border-[#e7e6e6] text-[#05073C] text-xs">
                          <div className="flex items-center">
                            <FontAwesomeIcon
                              className="text-base me-1"
                              icon={faClock}
                            />
                            4 Days
                          </div>
                          <div>
                            From{" "}
                            <span className="text-base font-medium">
                              $ 189.25
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-10 box-border">
        <NavigationButton buttonIdentifier="js-slider1-prev">
          <FontAwesomeIcon icon={faArrowLeft} className="text-xl" />
        </NavigationButton>
        <NavigationButton buttonIdentifier="js-slider1-next">
          <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
        </NavigationButton>
      </div>
    </div>
  );
};

export default InfoCardSlider;
