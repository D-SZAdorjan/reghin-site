import React from 'react'
import GridRow from './general/GridRow';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import articleImage1 from '../../public/img/articles/1.jpg';
import articleImage2 from '../../public/img/articles/2.jpg';
import { Article } from '@prisma/client';


const MainArticles = ({ data = [], locale = "en" }: { data?: Article[], locale?: string }) => {
  let typedArticleTitle: { [key: string]: string } = {};
  let typedArticleTitle2: { [key: string]: string } = {};
  let typedArticleSubTitle: { [key: string]: string } = {};
  let typedArticleSubTitle2: { [key: string]: string } = {};
  if (data.length > 0) {
    typedArticleTitle = data[0].title as {
      [key: string]: string;
    };
    typedArticleSubTitle = data[0].subtitle as {
      [key: string]: string;
    };
  }
  if (data.length > 1) {
    typedArticleTitle2 = data[1].title as {
      [key: string]: string;
    };
    typedArticleSubTitle2 = data[1].subtitle as {
      [key: string]: string;
    };
  }
  return (
    <section className="pb-20">
      <div className="container mx-auto">
        <GridRow>
          <div className="flex-[0_0_auto] -gap-1.5 box-border max-w-full px-[calc(30px*0.5)] pt-0">
            <h2 className="transition duration-[800ms] text-2xl">
              Main Articles
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
        <GridRow className="mx-[calc(30px*-0.5)] justify-between items-center pt-14">
          { data[0] && <div className="px-[calc(30px*0.5)] flex-[0_0_auto] w-full mb-8 md:mb-0 md:w-1/2 box-border">
            <div className="relative h-full z-0 box-border">
              <div className="absolute top-0 left-0 w-full h-full z-[-1] box-border">
                <Image
                  src={data[0].image ? data[0].image as string : "/img/placeholder_dark.png"}
                  width={630}
                  height={401}
                  alt="image"
                  className="rounded-xl object-cover h-full w-full"
                />
              </div>
              <div className="realative w-full h-full p-14 box-border">
                <div className="text-white box-border">
                  {/* Enjoy these cool staycation promotions in Singapore */}
                  {typedArticleSubTitle[locale]}
                </div>
                <h4 className="text-3xl font-bold text-white">
                  {/* Best staycation <br></br> deals */}
                  {typedArticleTitle[locale]}
                </h4>
                <Link
                  href="/"
                  className="mt-20 py-4 px-9 cursor-pointer bg-white flex items-center justify-center text-center text-sm font-medium rounded-xl border border-transparent transition duration-300 ease-[cubic-bezier(.165,.84,.44,1)] w-fit"
                >
                  See activities
                  <FontAwesomeIcon icon={faArrowUp} className="ms-2 rotate-45"/>
                </Link>
              </div>
            </div>
          </div>}
          
          {data[1] && <div className="px-[calc(30px*0.5)] flex-[0_0_auto] w-full md:w-1/2 box-border">
            <div className="relative h-full z-0 box-border">
              <div className="absolute top-0 left-0 w-full h-full z-[-1] box-border">
                <Image
                  src={data[1].image ? data[1].image as string : "/img/placeholder_dark.png"}
                  width={630}
                  height={401}
                  alt="image"
                  className="rounded-xl object-cover h-full w-full"
                />
              </div>
              <div className="realative w-full h-full p-14 box-border">
                <div className="text-white box-border">
                  {/* Enjoy these cool staycation promotions in Singapore */}
                  {typedArticleSubTitle2[locale]}
                </div>
                <h4 className="text-3xl font-bold text-white">
                  {/* Best staycation <br></br> deals */}
                  {typedArticleTitle2[locale]}
                </h4>
                <Link
                  href="/"
                  className="mt-20 py-4 px-9 cursor-pointer bg-white flex items-center justify-center text-center text-sm font-medium rounded-xl border border-transparent transition duration-300 ease-[cubic-bezier(.165,.84,.44,1)] w-fit"
                >
                  See activities
                  <FontAwesomeIcon icon={faArrowUp} className="ms-2 rotate-45"/>
                </Link>
              </div>
            </div>
          </div>}
        </GridRow>
        
      </div>
    </section>
  );
}

export default MainArticles