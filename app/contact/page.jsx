import InnerPageTemplate from "../components/common/InnerPageTemplate";

export default function ContactPage() {
  return (
    <InnerPageTemplate
      eyebrow="Support"
      title="Contact Us"
      description="Reach our travel specialists for trip planning, booking support, or custom itineraries. We are here to help you plan confidently."
      links={[
        { label: "Contact Details", href: "/contact/details" },
        { label: "Enquire Now", href: "/enquire" },
      ]}
    />
  );
}
