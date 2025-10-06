import Accordion from "@/components/AccordionSection";
import HomePageSection1 from "@/components/HomePageSection1";
import OurBenefits from "@/components/OurBenefits";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <div className="">

        <HomePageSection1 />
        <OurBenefits />
        <Testimonials />
        <Accordion />

      </div>
    </>
  );
}
