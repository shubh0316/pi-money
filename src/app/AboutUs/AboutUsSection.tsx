import React from 'react';
import { Separator } from "@/components/ui/separator";

function AboutUsSection() {
  return (
    <div>
      <div className="flex flex-col justify-around items-center space-y-8 mt-20 p-6">
        <div className="text-4xl font-bold">About Us</div>
        <div className="text-4xl font-light text-center">Afford what you want, sustainably.</div>
        <span className='text-center text-xl'>
          Pi.money is a platform that helps you save up for the things you really want in a super fun and easy way. You can set up your own personalized savings plan and make payments on it at your own pace. Plus, with Pi.money's rewards program, you can earn up to 40% rewards!
        </span>
        <Separator className="w-full bg-black" />
        <div className="text-4xl font-light">
          Pi.money believes that everyone should be able to have the things they love.
        </div>
        <span className='text-center text-xl'>
          We want people to meet needs, go places, give gifts, build, experience and enjoy. We want people to be able to live life the way they&apos;ve always imagined. Today, economy built on credit and debt pushes people to trade financial wellbeing for instant gratification. People may get what they want today, but they end up owing. It doesn&apos;t have to be that way. Together, we can change the way we think about buying. We can change the way brands engage with their customers. And we&apos;d like to think we can make their worlds a little bit better — one deposit at a time.
        </span>
        <Separator className="w-full bg-black" />
        <div className="text-4xl font-light">Sweet things come to those who wait.</div>
        <div className='text-center text-xl'>
          <p>Are you tired of constantly swiping your credit card, racking up debt, and never being able to afford that special something you've had your eye on?</p>
          <p>
            Let&apos;s help people create the lives they want without being indebted to someone else. Let&apos;s look for partners that want to help people buy what they&apos;re selling — responsibly. Let&apos;s help people save up for whatever they imagine — because they&apos;ll enjoy it more when it&apos;s truly theirs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
