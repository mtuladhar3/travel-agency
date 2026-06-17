import InnerPageTemplate from "../components/common/InnerPageTemplate";

export default function SupportPage() {
  return (
    <InnerPageTemplate
      eyebrow="Help"
      title="Support"
      description="Find booking help, pre-departure guidance, and answers to common questions before and after your trip."
      links={[
        { label: "Contact Us", href: "/contact" },
        { label: "Enquire Now", href: "/enquire" },
      ]}
    />
  );
}
