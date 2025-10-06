import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionSection() {
  return (
    <div className="xl:px-60 px-10 py-10">

      <div className="flex flex-col gap-5 w-full justify-center items-center mb-10">
        <h1 className="font-extrabold text-5xl text-center">Frequently Asked Questions</h1>
        <p className="xl:px-70 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
          quasi aspernatur minus, nisi a, reprehenderit vitae facilis id quos
          beatae voluptatem optio ea nesciunt! Deleniti praesentium asperiores
          est quos quibusdam.
        </p>
      </div>

      <div className="flex flex-col xl:flex-row xl:gap-10 gap-6">

        <div className="w-full h-full">
          <Accordion className={`flex flex-col gap-6`} type="single" collapsible>
            <AccordionItem className={`bg-red-100 border-2 shadow-[5px_4px_0px_2px_#000000] border-black px-10 rounded-2xl`} value="item-1">
              <AccordionTrigger className={`text-2xl`}>Is it accessible?</AccordionTrigger>
              <AccordionContent className={`text-xl`}>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className={`bg-red-100 border-2 shadow-[5px_4px_0px_2px_#000000] border-black px-10 rounded-2xl`} value="item-2">
              <AccordionTrigger className={`text-2xl`}>Is it accessible?</AccordionTrigger>
              <AccordionContent className={`text-xl`}>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className={`bg-red-100 border-2 shadow-[5px_4px_0px_2px_#000000] border-black px-10 rounded-2xl`} value="item-3">
              <AccordionTrigger className={`text-2xl`}>Is it accessible?</AccordionTrigger>
              <AccordionContent className={`text-xl`}>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="w-full">
          <Accordion className={`flex flex-col gap-6`} type="single" collapsible>
            <AccordionItem className={`bg-red-100 border-2 shadow-[5px_4px_0px_2px_#000000] border-black px-10 rounded-2xl`} value="item-1">
              <AccordionTrigger className={`text-2xl`}>Is it accessible?</AccordionTrigger>
              <AccordionContent className={`text-xl`}>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className={`bg-red-100 border-2 shadow-[5px_4px_0px_2px_#000000] border-black px-10 rounded-2xl`} value="item-2">
              <AccordionTrigger className={`text-2xl`}>Is it accessible?</AccordionTrigger>
              <AccordionContent className={`text-xl`}>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className={`bg-red-100 border-2 shadow-[5px_4px_0px_2px_#000000] border-black px-10 rounded-2xl`} value="item-3">
              <AccordionTrigger className={`text-2xl`}>Is it accessible?</AccordionTrigger>
              <AccordionContent className={`text-xl`}>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
