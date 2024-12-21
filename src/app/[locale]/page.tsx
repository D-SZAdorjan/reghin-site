import { getAllPersons } from "@/app/api/notablePersonalities";
import { getIntl } from "@/i18n";
import Image from "next/image";
import ChurchesSection from "@/components/ChurchesSection";
import HospitalitySection from "@/components/HospitalitySection";
import MainArticles from "@/components/MainArticles";
import MonumentsSection from "@/components/MonumentsSection";
import InnerPageHeader1 from "@/components/InnerPages/InnerPageHeader1";
import HeroBgImage from "../../../public/img/ana-landscape-3rdfavourite.png";
import { Article, Monument } from "@prisma/client";
import SuperJSON from "superjson";

export default async function Home({params} : {
  params:{
    locale: string;
  };
}) {

  const { locale } = params
  const translations = await getIntl(locale);
  let articleData: Article[] = [];
  let buildingData: Monument[] = [];
  let churchData: Monument[] = [];

  let jsonData;
  try{
    const articles = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_ROUTE}articles?category=1`);
    jsonData = await articles.json();
    articleData = SuperJSON.deserialize<Article[]>(jsonData.data);
  }catch(error){
    console.error(error);
  }

  try{
    const buildings = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_ROUTE}monuments?category=1&limit=6`);
    jsonData = await buildings.json();
    buildingData = SuperJSON.deserialize<Monument[]>(jsonData.data);
  }catch(error){
    console.error(error);
  }

  try{
    const churches = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_ROUTE}monuments?category=2&limit=4`);
    jsonData = await churches.json();
    churchData = SuperJSON.deserialize<Monument[]>(jsonData.data);
  }catch(error){
    console.error(error);
  }

  return (
    <>
      <section className="relative h-lvh z-20">
        <div className="hero-shape absolute bottom-0 start-0 right-0 h-20 bg-purple-50 rounded-t-[80px] z-10"></div>
        <div className="hero-content h-full">
          <div className="hero-bg absolute top-0 start-0 w-full h-full -z-10">
            <Image
              className="w-full h-full object-cover"
              src={HeroBgImage}
              width={1920}
              height={960}
              alt="Hero Background Image"
            />
          </div>
        </div>
      </section>
      <section className="bg-purple-50 pb-20 relative">
      {/* <InfoCardSlider
        personsJson={JSON.parse(personsJson)}
        buildingsJson={JSON.parse(buildingsJson)}
        churchesJson={JSON.parse(churchesJson)}
      /> */}
      </section>
      <MonumentsSection data={buildingData} locale={locale}/>
      <ChurchesSection data={churchData} locale={locale}/>
      <HospitalitySection/>
      <MainArticles data={articleData} locale={locale}/>
      {/* <InnerPageHeader1/> */}
    </>
  );
}
