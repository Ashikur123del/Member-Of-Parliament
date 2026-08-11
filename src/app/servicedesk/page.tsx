import HeroBio from "@/components/About-Compo/HeroBio";
import { FiArrowRight, FiHelpCircle } from "react-icons/fi";
import Image5 from "@/assets/s-4.jpg";
import { ServiceGrid } from "@/components/ServiceDesk/ServiceGrid";
import { ComplainForm } from "@/components/ServiceDesk/ComplainForm";
import { EmergencyContacts } from "@/components/ServiceDesk/EmergencyContacts";

const ServicePage = () => {
  return (
    <>
      <HeroBio
        badgeText="নাগরিক সেবা কেন্দ্র"
        badgeIcon={FiHelpCircle}
        image={Image5}
        name="জনগণের সেবা ডেস্ক"
        title="সাভার ও আশুলিয়ার নাগরিকদের ডিজিটাল সেবা প্ল্যাটফর্ম"
        description="সাভার ও আশুলিয়া এলাকার জনগণের যেকোনো সমস্যা, অভিযোগ, মতামত কিংবা সরকারি সুপারিশপত্রের জন্য সরাসরি অনলাইনে আবেদন করুন। আমরা আপনার সেবায় নিয়োজিত।"
        stats={[
          { label: "সমাধানের হার", value: "৯৫%" },
          { label: "নাগরিক সেবা", value: "২৪/৭ অনলাইন" },
          { label: "গড় সাড়া প্রদানের সময়", value: "২৪-৪৮ ঘণ্টা" },
        ]}
        actions={[
          {
            label: "অভিযোগ জমা দিন",
            href: "#complain-form",
            variant: "primary",
            icon: FiArrowRight,
          },
          {
            label: "জরুরি কন্টাক্ট",
            href: "#emergency-contacts",
            variant: "outline",
          },
        ]}
      />
      <ServiceGrid />
      <ComplainForm />
      <EmergencyContacts />
    </>
  );
};

export default ServicePage;
