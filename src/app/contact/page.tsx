import ContactForm from '@/components/ui/ContactForm';
import { Metadata } from "next";

export const metadata: Metadata={
  title:"Contact"
}
function page() {
  return (
    <div>
        <ContactForm/>
    </div>
  )
}

export default page