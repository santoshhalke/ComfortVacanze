import EducationalTours1 from "@/components/EducationalTours/EducationalTours1";
import EducationalTours2 from "@/components/EducationalTours/EducationalTours2";
import EducationalTours3 from "@/components/EducationalTours/EducationalTours3";
import EducationalTours4 from "@/components/EducationalTours/EducationalTours4";
import { Metadata } from "next";

export const metadata: Metadata={
  title:"Educational Tourism in Malaysia"
}

const EduTourismPage = () => {
 

  return (
    <div>
    <EducationalTours1/>
    <EducationalTours2/>
    <EducationalTours3/>
    <EducationalTours4/>

    </div>
  );
};

export default EduTourismPage;