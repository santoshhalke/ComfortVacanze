import CorporateTours1 from "@/components/CorporateTours/CorporateTours1";
import CorporateTours2 from "@/components/CorporateTours/CorporateTours2";
import CorporateTours3 from "@/components/CorporateTours/CorporateTours3";
import CorporateTours4 from "@/components/CorporateTours/CorporateTours4";
import { Metadata } from "next";

export const metadata: Metadata={
  title:"Corporate Group Tours & Global Events"
}

const CorporatePage = () => {


  return (
    <div>
<CorporateTours1/>
<CorporateTours2/>
<CorporateTours3/>
<CorporateTours4/>
      

    </div>
  );
};

export default CorporatePage;