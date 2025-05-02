import { Metadata } from "next";

import Mice1 from "@/components/Mice/Mice1";
import Mice2 from "@/components/Mice/Mice2";
import Mice3 from "@/components/Mice/Mice3";
import Mice4 from "@/components/Mice/Mice4";

export const metadata: Metadata = {
  title: "Global MICE Excellence",
};

const MICEpage = () => {
  return (
    <div>
      <Mice1 />
      <Mice2 />
      <Mice3 />
      <Mice4 />
    </div>
  );
};

export default MICEpage;
