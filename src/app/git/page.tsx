import Git1 from "@/components/Git/Git1";
import Git2 from "@/components/Git/Git2";
import Git3 from "@/components/Git/Git3";
import Git4 from "@/components/Git/Git4";
import { Metadata } from "next";
export const metadata: Metadata={
  title:"Group Inclusive Tours"
}
const GITPage = () => {

  return (
    <div>
<Git1/>
<Git2/>
<Git3/>
<Git4/>
    </div>
  );
};

export default GITPage;