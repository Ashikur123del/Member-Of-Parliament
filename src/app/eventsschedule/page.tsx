import HeroBio from '@/components/About-Compo/HeroBio'
import { EventGrid } from '@/components/EventsSchedule/EventGrid'
import { FiArrowRight, FiCalendar } from 'react-icons/fi'
import Image5 from '@/assets/E-1.jpg'
import { ComplainForm } from '@/components/ServiceDesk/ComplainForm'
import { EventCalendarNotice } from '@/components/EventsSchedule/EventCalendarNotice'

const EventsSchedulePage = () => {
  return (
    <>
       <HeroBio
      badgeText="সময়সূচী ও কার্যক্রম"
      badgeIcon={FiCalendar}
      image={Image5}
      name="সংসদ সদস্যের ইভেন্ট ও দৈনিক সূচি"
      title="সাভার ও আশুলিয়া অঞ্চল (ঢাকা-১৯)"
      description="সাভার ও আশুলিয়ার উন্নয়নমূলক সভা, গণশুনানি, অনুষ্ঠান এবং সরাসরি মতবিনিময়ের হালনাগাদ তথ্য এখানে পাবেন।"
      stats={[
        { label: "চলতি মাস", value: "১২+ ইভেন্ট" },
        { label: "গণশুনানি", value: "সাপ্তাহিক" },
        { label: "স্থান", value: "সাভার ও আশুলিয়া" },
      ]}
      actions={[
        { label: "জরুরি যোগাযোগ", href: "/contact", variant: "primary", icon: FiArrowRight },
        { label: "অভিযোগ জমা দিন", href: "/complain", variant: "outline" },
      ]}
    />
      <EventGrid />
      <ComplainForm />
      <EventCalendarNotice />
    </>
  )
}

export default EventsSchedulePage