import React from 'react'
import GridRow from './general/GridRow'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import monumentImg1 from '../../public/img/monuments/1.jpg';
import monumentImg2 from '../../public/img/monuments/2.jpg';
import monumentImg3 from '../../public/img/monuments/3.jpg';
import monumentImg4 from '../../public/img/monuments/4.jpg';
import monumentImg5 from '../../public/img/monuments/5.jpg';
import monumentImg6 from '../../public/img/monuments/6.jpg';
import Image from 'next/image'

const MonumentsSection = () => {
  return (
    <section className="pb-20">
      <div className="container mx-auto">
        <GridRow>
          <div className="flex-[0_0_auto] -gap-1.5 box-border max-w-full px-[calc(30px*0.5)] pt-0">
            <h2 className="transition duration-[800ms] text-2xl">Monuments</h2>
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
        <div className="grid grid-cols-12 grid-rows-2 gap-7 pt-14 transition duration-[800ms] ease">
          <Link
            href="/"
            className="relative z-0 rounded-xl overflow-hidden p-7 no-underline col-span-3 h-[240px] group"
          >
            <div className="absolute top-0 start-0 w-full h-full z-[-1] overflow-hidden box-border">
              <Image
                width={780}
                height={780}
                style={{ objectFit: "cover" }}
                src={monumentImg1}
                alt="Monument Image"
                className="object-cover w-full h-full transition duration-700 max-w-full align-middle box-border group-hover:scale-125"
              ></Image>
            </div>
            <div className="flex items-end w-full h-full">
              <h4 className="text-white text-xl">Monument 1</h4>
            </div>
          </Link>
          <Link
            href="/"
            className="relative z-0 rounded-xl overflow-hidden p-7 no-underline col-span-5 h-[240px] group"
          >
            <div className="absolute top-0 start-0 w-full h-full z-[-1] overflow-hidden box-border">
              <Image
                width={780}
                height={780}
                style={{ objectFit: "cover" }}
                src={monumentImg2}
                alt="Monument Image"
                className="object-cover w-full h-full transition duration-700 max-w-full align-middle box-border group-hover:scale-125"
              ></Image>
            </div>
            <div className="flex items-end w-full h-full">
              <h4 className="text-white text-xl">Monument 2</h4>
            </div>
          </Link>
          <Link
            href="/"
            className="relative z-0 rounded-xl overflow-hidden p-7 no-underline col-span-4 row-span-2 group"
          >
            <div className="absolute top-0 start-0 w-full h-full z-[-1] overflow-hidden box-border">
              <Image
                width={780}
                height={780}
                style={{ objectFit: "cover" }}
                src={monumentImg3}
                alt="Monument Image"
                className="object-cover w-full h-full transition duration-700 max-w-full align-middle box-border group-hover:scale-125"
              ></Image>
            </div>
            <div className="flex items-end w-full h-full">
              <h4 className="text-white text-xl">Monument 3</h4>
            </div>
          </Link>
          <Link
            href="/"
            className="relative z-0 rounded-xl overflow-hidden p-7 no-underline col-span-3 h-[240px] group"
          >
            <div className="absolute top-0 start-0 w-full h-full z-[-1] overflow-hidden box-border">
              <Image
                width={780}
                height={780}
                style={{ objectFit: "cover" }}
                src={monumentImg4}
                alt="Monument Image"
                className="object-cover w-full h-full transition duration-700 max-w-full align-middle box-border group-hover:scale-125"
              ></Image>
            </div>
            <div className="flex items-end w-full h-full">
              <h4 className="text-white text-xl">Monument 4</h4>
            </div>
          </Link>
          <Link
            href="/"
            className="relative z-0 rounded-xl overflow-hidden p-7 no-underline col-span-2 h-[240px] group"
          >
            <div className="absolute top-0 start-0 w-full h-full z-[-1] overflow-hidden box-border">
              <Image
                width={780}
                height={780}
                style={{ objectFit: "cover" }}
                src={monumentImg5}
                alt="Monument Image"
                className="object-cover w-full h-full transition duration-700 max-w-full align-middle box-border group-hover:scale-125"
              ></Image>
            </div>
            <div className="flex items-end w-full h-full">
              <h4 className="text-white text-xl">Monument 5</h4>
            </div>
          </Link>
          <Link
            href="/"
            className="relative z-0 rounded-xl overflow-hidden p-7 no-underline col-span-3 h-[240px] group"
          >
            <div className="absolute top-0 start-0 w-full h-full z-[-1] overflow-hidden box-border">
              <Image
                width={780}
                height={780}
                style={{ objectFit: "cover" }}
                src={monumentImg6}
                alt="Monument Image"
                className="object-cover w-full h-full transition duration-700 max-w-full align-middle box-border group-hover:scale-125"
              ></Image>
            </div>
            <div className="flex items-end w-full h-full">
              <h4 className="text-white text-xl">Monument 6</h4>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MonumentsSection