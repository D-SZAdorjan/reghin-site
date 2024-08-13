import React from 'react'
import GridRow from './general/GridRow';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import hospitalityImage1 from '../../public/img/hospitality/1.png';
import hospitalityImage2 from '../../public/img/hospitality/2.png';
import hospitalityImage3 from '../../public/img/hospitality/3.png';
import hospitalityImage4 from '../../public/img/hospitality/4.png';
import hospitalityImage5 from '../../public/img/hospitality/5.png';
import hospitalityImage6 from '../../public/img/hospitality/6.png';
import hospitalityImage7 from '../../public/img/hospitality/7.png';
import hospitalityImage8 from '../../public/img/hospitality/8.png';
import hospitalityImage9 from '../../public/img/hospitality/9.png';


const HospitalitySection = () => {
  return (
    <section className="pb-20">
      <div className="container mx-auto">
        <GridRow>
          <div className="flex-[0_0_auto] -gap-1.5 box-border max-w-full px-[calc(30px*0.5)] pt-0">
            <h2 className="transition duration-[800ms] text-2xl">
              Hospitality
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
        <GridRow className="pt-14">
          <div className="flex w-2/6 box-border max-w-full px-[calc(30px*0.5)] mt-0 py-4">
            <Link href="/" className="flex items-center group">
              <div className="relative rounded-xl overflow-hidden shrink-0 w-[100px] h-[100px] box-border">
                <Image
                  width={100}
                  height={100}
                  src={hospitalityImage1}
                  alt="image"
                  className="rounded-xl absolute top-0 left-0 transition duration-700 w-full h-full object-cover max-w-full box-border group-hover:scale-125"
                />
              </div>
              <div className="ms-7 box-border">
                <h3 className="text-lg font-medium">Hotel 1</h3>
                <p className="text-sm">Hotels ****</p>
              </div>
            </Link>
          </div>
          <div className="flex w-2/6 box-border max-w-full px-[calc(30px*0.5)] mt-0 py-4">
            <Link href="/" className="flex items-center group">
              <div className="relative rounded-xl overflow-hidden shrink-0 w-[100px] h-[100px] box-border">
                <Image
                  width={100}
                  height={100}
                  src={hospitalityImage1}
                  alt="image"
                  className="rounded-xl absolute top-0 left-0 transition duration-700 w-full h-full object-cover max-w-full box-border group-hover:scale-125"
                />
              </div>
              <div className="ms-7 box-border">
                <h3 className="text-lg font-medium">Restaurant 1</h3>
                <p className="text-sm">Restaurants ****</p>
              </div>
            </Link>
          </div>
          <div className="flex w-2/6 box-border max-w-full px-[calc(30px*0.5)] mt-0 py-4">
            <Link href="/" className="flex items-center group">
              <div className="relative rounded-xl overflow-hidden shrink-0 w-[100px] h-[100px] box-border">
                <Image
                  width={100}
                  height={100}
                  src={hospitalityImage1}
                  alt="image"
                  className="rounded-xl absolute top-0 left-0 transition duration-700 w-full h-full object-cover max-w-full box-border group-hover:scale-125"
                />
              </div>
              <div className="ms-7 box-border">
                <h3 className="text-lg font-medium">Pub & Bar 1</h3>
                <p className="text-sm">Pub & Bar ****</p>
              </div>
            </Link>
          </div>
          <div className="flex w-2/6 box-border max-w-full px-[calc(30px*0.5)] mt-0 py-4">
            <Link href="/" className="flex items-center group">
              <div className="relative rounded-xl overflow-hidden shrink-0 w-[100px] h-[100px] box-border">
                <Image
                  width={100}
                  height={100}
                  src={hospitalityImage1}
                  alt="image"
                  className="rounded-xl absolute top-0 left-0 transition duration-700 w-full h-full object-cover max-w-full box-border group-hover:scale-125"
                />
              </div>
              <div className="ms-7 box-border">
                <h3 className="text-lg font-medium">Hotel 1</h3>
                <p className="text-sm">Hotels ****</p>
              </div>
            </Link>
          </div>
          <div className="flex w-2/6 box-border max-w-full px-[calc(30px*0.5)] mt-0 py-4">
            <Link href="/" className="flex items-center group">
              <div className="relative rounded-xl overflow-hidden shrink-0 w-[100px] h-[100px] box-border">
                <Image
                  width={100}
                  height={100}
                  src={hospitalityImage1}
                  alt="image"
                  className="rounded-xl absolute top-0 left-0 transition duration-700 w-full h-full object-cover max-w-full box-border group-hover:scale-125"
                />
              </div>
              <div className="ms-7 box-border">
                <h3 className="text-lg font-medium">Restaurant 1</h3>
                <p className="text-sm">Restaurants ****</p>
              </div>
            </Link>
          </div>
          <div className="flex w-2/6 box-border max-w-full px-[calc(30px*0.5)] mt-0 py-4">
            <Link href="/" className="flex items-center group">
              <div className="relative rounded-xl overflow-hidden shrink-0 w-[100px] h-[100px] box-border">
                <Image
                  width={100}
                  height={100}
                  src={hospitalityImage1}
                  alt="image"
                  className="rounded-xl absolute top-0 left-0 transition duration-700 w-full h-full object-cover max-w-full box-border group-hover:scale-125"
                />
              </div>
              <div className="ms-7 box-border">
                <h3 className="text-lg font-medium">Pub & Bar 1</h3>
                <p className="text-sm">Pub & Bar ****</p>
              </div>
            </Link>
          </div>
          <div className="flex w-2/6 box-border max-w-full px-[calc(30px*0.5)] mt-0 py-4">
            <Link href="/" className="flex items-center group">
              <div className="relative rounded-xl overflow-hidden shrink-0 w-[100px] h-[100px] box-border">
                <Image
                  width={100}
                  height={100}
                  src={hospitalityImage1}
                  alt="image"
                  className="rounded-xl absolute top-0 left-0 transition duration-700 w-full h-full object-cover max-w-full box-border group-hover:scale-125"
                />
              </div>
              <div className="ms-7 box-border">
                <h3 className="text-lg font-medium">Hotel 1</h3>
                <p className="text-sm">Hotels ****</p>
              </div>
            </Link>
          </div>
          <div className="flex w-2/6 box-border max-w-full px-[calc(30px*0.5)] mt-0 py-4">
            <Link href="/" className="flex items-center group">
              <div className="relative rounded-xl overflow-hidden shrink-0 w-[100px] h-[100px] box-border">
                <Image
                  width={100}
                  height={100}
                  src={hospitalityImage1}
                  alt="image"
                  className="rounded-xl absolute top-0 left-0 transition duration-700 w-full h-full object-cover max-w-full box-border group-hover:scale-125"
                />
              </div>
              <div className="ms-7 box-border">
                <h3 className="text-lg font-medium">Restaurant 1</h3>
                <p className="text-sm">Restaurants ****</p>
              </div>
            </Link>
          </div>
          <div className="flex w-2/6 box-border max-w-full px-[calc(30px*0.5)] mt-0 py-4">
            <Link href="/" className="flex items-center group">
              <div className="relative rounded-xl overflow-hidden shrink-0 w-[100px] h-[100px] box-border">
                <Image
                  width={100}
                  height={100}
                  src={hospitalityImage1}
                  alt="image"
                  className="rounded-xl absolute top-0 left-0 transition duration-700 w-full h-full object-cover max-w-full box-border group-hover:scale-125"
                />
              </div>
              <div className="ms-7 box-border">
                <h3 className="text-lg font-medium">Pub & Bar 1</h3>
                <p className="text-sm">Pub & Bar ****</p>
              </div>
            </Link>
          </div>
        </GridRow>
      </div>
    </section>
  );
}

export default HospitalitySection