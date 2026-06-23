import ClientReviews from "./ClientReviews";
import MainHeading from "./MainHeading";
import FeaturedImage from "./FeaturedImage";
import DescriptionBlock from "./DescriptionBlock";
import SectionLabel from "./SectionLabel";

export default function AboutSection() {
  return (
    <section className="relative bg-white w-full overflow-hidden px-6 pt-10 pb-12 sm:px-10 sm:pt-16 sm:pb-16 md:pb-0 md:pt-10 lg:px-16 lg:pt-14 lg:pb-0 xl:px-24">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-full max-w-[55%] bg-[url('/images/img-transparent.png')] bg-contain bg-bottom-left bg-no-repeat opacity-[0.62]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-12 xl:gap-x-14">
          <div className="lg:col-span-3 lg:row-start-1">
            <SectionLabel />
          </div>

          <div className="w-full lg:col-span-9 lg:col-start-4 lg:row-start-1">
            <MainHeading />
          </div>

          <div className="flex items-start lg:col-span-3 lg:row-start-2 lg:pt-6 xl:pt-10">
            <ClientReviews />
          </div>

          <div className="w-full lg:col-span-5 lg:col-start-4 lg:row-start-2">
            <FeaturedImage />
          </div>

          <div className="flex w-full items-start lg:col-span-4 lg:col-start-9 lg:row-start-2 lg:pt-6 xl:pt-10">
            <DescriptionBlock />
          </div>
        </div>
      </div>
    </section>
  );
}
