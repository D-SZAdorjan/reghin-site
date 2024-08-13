import { getIntl } from "@/i18n";
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
      <h2 className="h-fit text-3xl text-orange-500">{translations.messages.indexPageText as string}</h2>
    </main>
  );
}
