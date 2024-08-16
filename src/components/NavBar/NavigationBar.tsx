"use client"
import {
  faAngleDown,
  faFlag,
  faLocationDot,
  faSearch,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import LogoImg from "../../public/viatours.svg";
import RecentSearchImage from "../../public/pexels-samsilitongajr-842687.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import languages from "@/api/getLanguages";

const NavigationBar = ({locale}: { locale: string; }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchOpen, serSearchOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen((old) => !old);
  };

  const togleSearchDropdown = () => {
    serSearchOpen((old) => !old);
  };
  return (
    <header className="fixed top-0 start-0 right-0 z-50 bg-transparent transition duration-200">
      <div className="container mx-auto flex items-center justify-between min-h-20">
        <div className="header-left text-white">
          <div className="header-search relative flex items-center bg-transparent">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute top-3 start-4 me-2.5"
            />
            <input
              type="text"
              placeholder="Search destinations or activities"
              className="bg-transparent text-white w-80 rounded-[200px] py-2 ps-12 pe-3 border border-solid border-transparent transition duration-200 outline-0"
              onClick={togleSearchDropdown}
            />
            <div
              className={`search-recent absolute top-full start-0 pt-3.5 transition duration-200 ${
                searchOpen
                  ? "opacity-1 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="search-recent-conteiner overflow-hidden w-[490px] max-w-full bg-white border border-solid border-[#e7e6e6] shadow-lg rounded-xl">
                <div className="header-search-recent-title pt-8 px-8 pb-4">
                  <h4 className="font-medium text-lg text-black">
                    Recent Searches
                  </h4>
                </div>
                <div className="header-search-recent-list overflow-y-scroll h-[450px]">
                  <div className="header-search-recent-item flex items-center w-full px-8 h-24 text-left">
                    <div className="bg-white rounded-xl border border-solid border-[#e7e6e6] flex justify-center items-center w-12 h-12 shrink-0">
                      <FontAwesomeIcon
                        className="text-xl text-black"
                        icon={faLocationDot}
                      />
                    </div>
                    <div className="ms-2.5">
                      <div className="font-medium text-black">Phuket</div>
                      <div className="font-medium text-[#717171] text-sm leading-normal">
                        Thailand, Asia
                      </div>
                    </div>
                  </div>
                  <div className="header-search-recent-item flex items-center w-full px-8 h-24 text-left">
                    <div className="bg-white rounded-xl border border-solid border-[#e7e6e6] flex justify-center items-center w-12 h-12 shrink-0">
                      <FontAwesomeIcon
                        className="text-xl text-black"
                        icon={faTag}
                      />
                    </div>
                    <div className="ms-2.5">
                      <div className="font-medium text-black">
                        London Day Trips
                      </div>
                      <div className="font-medium text-[#717171] text-sm leading-normal">
                        England
                      </div>
                    </div>
                  </div>
                  <div className="header-search-recent-item flex items-center w-full px-8 h-24 text-left">
                    <div className="bg-white rounded-xl border border-solid border-[#e7e6e6] flex justify-center items-center w-12 h-12 shrink-0">
                      <FontAwesomeIcon
                        className="text-xl text-black"
                        icon={faFlag}
                      />
                    </div>
                    <div className="ms-2.5">
                      <div className="font-medium text-black">Europe</div>
                      <div className="font-medium text-[#717171] text-sm leading-normal">
                        Continent
                      </div>
                    </div>
                  </div>
                  <div className="header-search-recent-item flex items-center w-full px-8 h-24 text-left">
                    <div className="bg-white rounded-xl border border-solid border-[#e7e6e6] flex justify-center items-center w-12 h-12 shrink-0">
                      <Image
                        src={RecentSearchImage}
                        width={50}
                        height={50}
                        alt="Recent Search Image"
                      />
                    </div>
                    <div className="ms-2.5">
                      <div className="font-medium text-black">
                        Centipede Tour - Guided Arizona Desert Tour by ATV
                      </div>
                      <div className="font-medium text-[#717171] text-sm leading-normal">
                        State
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
        <div className="header-center">
          <div className="flex align-center">
            <Link href={"/"} className="flex align-center">
              <Image width={167} height={32} src={LogoImg} alt="Webstie Logo" />
            </Link>
          </div>
        </div>
        <div className=""></div>
        <div className="header-right flex items-center">
          <div className="text-white">
            <div className="relative text-white">
              <div
                className="dropdown-button flex items-center transition duration-200 cursor-pointer py-2 px-5 rounded-full hover:bg-white/[0.1]"
                onClick={toggleDropdown}
              >
                {languages.find(lang => lang.slug === locale)?.abbreviation}
                <FontAwesomeIcon className="ms-1" icon={faAngleDown} />
              </div>
              <div
                className={`dropdown-content transition duration-200 ${
                  isOpen
                    ? "opacity-1 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="dropdown absolute top-full start-1/2 z-20 pt-2.5 -translate-x-1/2">
                  <div className="header-dropdown-container bg-white w-56 rounded-xl py-5 px-10 border border-solid border-[#e7e6e6] shadow-lg">
                    {languages.map((lang, index) => (
                      <div key={`${lang.abbreviation}_${index}`}>
                        <Link href={lang.slug} className="header-dropdown-item text-sm font-medium text-black leading-[200%] hover:cursor-pointer hover:underline hover:decoration-1 hover:text-orange-400">
                        {lang.lang}
                      </Link>
                      </div>
                    ))}
                    {/* <div className="header-dropdown-item text-sm font-medium text-black leading-[200%] hover:cursor-pointer hover:underline hover:decoration-1 hover:text-orange-400">
                      HUN
                    </div>
                    <div className="header-dropdown-item text-sm font-medium text-black leading-[200%] hover:cursor-pointer hover:underline hover:decoration-1 hover:text-orange-400">
                      ROM
                    </div>
                    <div className="header-dropdown-item text-sm font-medium text-black leading-[200%] hover:cursor-pointer hover:underline hover:decoration-1 hover:text-orange-400">
                      FRE
                    </div>
                    <div className="header-dropdown-item text-sm font-medium text-black leading-[200%] hover:cursor-pointer hover:underline hover:decoration-1 hover:text-orange-400">
                      GER
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
