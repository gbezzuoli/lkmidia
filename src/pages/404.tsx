import Head from "next/head";
import { useRouter } from "next/router";

const FourOhFour = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>404 - Not Found</title>
      </Head>
      <main className="overflow-auto py-40 h-screen w-screen flex">
        <div className=" m-auto flex justify-center flex-col items-center space-y-8">
          <h1 className="font-tech text-8xl">404 - Not Found</h1>
          <h2 className="text-neutral-500">
            A página que você está procurando não existe ou ainda está em
            desenvolvimento
          </h2>
          <a
            className="cursor-pointer font-tech text-green-400 underline "
            onClick={() => router.push("/")}
          >
            VOLTAR AO ÍNICIO
          </a>
        </div>
      </main>
    </>
  );
};

export default FourOhFour;
