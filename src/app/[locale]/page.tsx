import { getIntl } from "@/i18n";
import { faMeta, faXbox } from "@fortawesome/free-brands-svg-icons";
import { faHourglass, faHourglass2, faHourglassEmpty, faSmile } from "@fortawesome/free-regular-svg-icons";
import { faHourglass1, faHourglass3,  faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default async function Home({params} : {
  params:{
    locale: string;
  };
}) {

  const { locale } = params
  const translations = await getIntl(locale);

  return (
    <main className="flex h-full w-full items-center justify-center">
      <h2 className="h-fit text-3xl text-orange-500 flex gap-x-3">
        {translations.messages.indexPageText as string}
        <FontAwesomeIcon icon={faMeta}/></h2>
    </main>
  );
}
