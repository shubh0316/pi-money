import Image from "next/image";
import HeroSection from "./HeroSection";
import MarqueueSection from "./MarqueueSection";
import Cardpage from "./CardSection/page";
import StickySection from "./StickySection";
import GreenBankSection from "./GreenBankSection";
import SeamlessSection from "./SeamlessSection";
import CustomStoriesSection from "./CustomStoriesSection";
import FAQs from "./FaqSection";
import MarqueeText from "./MarqueeText";

export default function Home() {
  return (
  <>
  <div className="bg-white rounded-bl-[100px] rounded-br-[100px] z-10 ">  
  <HeroSection />
  <MarqueueSection />
  <Cardpage />
  <StickySection />
  <GreenBankSection />
  <SeamlessSection />
  <CustomStoriesSection />
  <FAQs />
  <MarqueeText />
  </div>
  </>
  );
}
