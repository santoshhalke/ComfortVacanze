import ContactForm from '@/components/ui/ContactForm';
import OfficeLocations from '@/components/ui/OfficeLocations';
import { Metadata } from "next";

export const metadata: Metadata={
  title:"Contact"
}
function page() {
  return (
    <div>
        <ContactForm/>
        <OfficeLocations/>
    </div>
  )
}

export default page