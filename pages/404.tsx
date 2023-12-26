import { ContentContainer, Page } from "@/components/layouts/layouts";
import { Footer } from "@/components/utils/Footer";
import { NavBar } from "@/components/utils/NavBar";
import { fontSypxzs } from "@/styles/font";
import { TfiFaceSad } from "react-icons/tfi";

export default function NotFoundPage() {
  const goBack = () => {
    window.history.back();
  };
  return (
    <Page>
      <NavBar />
      <ContentContainer>
        <div className="flex flex-col justify-center">
          <TfiFaceSad className="mx-auto my-4" size={"6em"} />
          <p className="mx-auto my-3 text-center text-2xl font-bold">{"404 NOT FOUND"}</p>
          <p className={`${fontSypxzs.className} mx-auto my-3 text-center text-xl`}>
            {"This page does not exist for it might be removed or closed."}
          </p>
          <div className="my-5 flex justify-center">
            <button onClick={goBack} className="link text-xl font-bold">
              {"GO BACK"}
            </button>
          </div>
        </div>
      </ContentContainer>
      <Footer />
    </Page>
  );
}