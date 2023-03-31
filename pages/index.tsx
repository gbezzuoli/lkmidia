import { NextPage } from "next";

import { DefaultLayout } from "@/shared/default-layout";
import { MainPage } from "@/pages/main/main.page";

const Index: NextPage = (props) => {
  return (
    <>
      <DefaultLayout>
        <MainPage {...props} />
      </DefaultLayout>
    </>
  );
};

export default Index;
