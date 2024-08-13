import React from 'react'
import GridRow from './general/GridRow'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import ChurchImage1 from '../../public/img/churches/1.jpg';
import ChurchImage2 from '../../public/img/churches/2.jpg';
import ChurchImage3 from '../../public/img/churches/3.jpg';
import ChurchImage4 from '../../public/img/churches/4.jpg';



const ChurchesSection = () => {
  return (
    <section className="pb-20">
      <div className="container mx-auto">
        <GridRow>
          <div className="flex-[0_0_auto] -gap-1.5 box-border max-w-full px-[calc(30px*0.5)] pt-0">
            <h2 className="transition duration-[800ms] text-2xl">Churches</h2>
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
        <GridRow className="pt-14">
          <div className="flex-[0_0_auto] py-4 w-1/4 box-border max-w-full px-[calc(30px*0.5)]">
            <Link href="/" className="relative z-0 no-underline group block">
              <div className="overflow-hidden rounded-xl relative block">
                <Image
                  width={450}
                  height={600}
                  src={ChurchImage1}
                  alt="image"
                  className="img-ratio group-hover:scale-150 transition duration-700 ease-in-out"
                />
              </div>
              <div className="h-full w-full bg-black z-10 absolute top-0 left-0 rounded-xl opacity-60 hidden group-hover:flex justify-center items-center ">
                <h3 className="text-white text-center text-2xl font-semibold">Church 1</h3>
              </div>
            </Link>
          </div>
          <div className="flex-[0_0_auto] py-4 w-1/4 box-border max-w-full px-[calc(30px*0.5)]">
            <Link href="/" className="relative z-0 no-underline group block">
              <div className="overflow-hidden rounded-xl relative block">
                <Image
                  width={450}
                  height={600}
                  src={ChurchImage1}
                  alt="image"
                  className="img-ratio group-hover:scale-150 transition duration-700 ease-in-out"
                />
              </div>
              <div className="h-full w-full bg-black z-10 absolute top-0 left-0 rounded-xl opacity-60 hidden group-hover:flex justify-center items-center ">
                <h3 className="text-white text-center text-2xl font-semibold">Church 2</h3>
              </div>
            </Link>
          </div>
          <div className="flex-[0_0_auto] py-4 w-1/4 box-border max-w-full px-[calc(30px*0.5)]">
            <Link href="/" className="relative z-0 no-underline group block">
              <div className="overflow-hidden rounded-xl relative block">
                <Image
                  width={450}
                  height={600}
                  src={ChurchImage1}
                  alt="image"
                  className="img-ratio group-hover:scale-150 transition duration-700 ease-in-out"
                />
              </div>
              <div className="h-full w-full bg-black z-10 absolute top-0 left-0 rounded-xl opacity-60 hidden group-hover:flex justify-center items-center ">
                <h3 className="text-white text-center text-2xl font-semibold">Church 3</h3>
              </div>
            </Link>
          </div>
          <div className="flex-[0_0_auto] py-4 w-1/4 box-border max-w-full px-[calc(30px*0.5)]">
            <Link href="/" className="relative z-0 no-underline group block">
              <div className="overflow-hidden rounded-xl relative block">
                <Image
                  width={450}
                  height={600}
                  src={ChurchImage1}
                  alt="image"
                  className="img-ratio group-hover:scale-150 transition duration-700 ease-in-out"
                />
              </div>
              <div className="h-full w-full bg-black z-10 absolute top-0 left-0 rounded-xl opacity-60 hidden group-hover:flex justify-center items-center ">
                <h3 className="text-white text-center text-2xl font-semibold">Church 4</h3>
              </div>
            </Link>
          </div>
        </GridRow>
      </div>
    </section>
  );
}

export default ChurchesSection