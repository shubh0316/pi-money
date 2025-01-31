/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import React from "react";
const Card = ({
  heading,
  description,
  imgUrl,
  bgColor,
  imgWidth = 600,
  marginLeft = "left-18",
}) => {
  
  //   <div className="container mx-auto mt-12">
  //     <div
  //       className={`max-w-[80vw] max-h-[90vh] m-4 flex ${bgColor} rounded-[24px] `}
  //     >
  //       <div className="max-w-[30rem] ml-10 mt-1 mb-20 text-left flex flex-col justify-center">
  //         <h1 className="text-4xl text-green-900 font-semibold mb-6">
  //           {heading}
  //         </h1>
  //         <p className="font-sans text-xl text-[#47836f] font-light mt-6">
  //           {description}
  //         </p>
  //       </div>
  //       <div className={`relative left-12 bottom-16 ml-${marginLeft}`}>
  //         <img
  //           src={imgUrl}
  //           alt="hero"
  //           width={imgWidth}
  //           className="h-auto max-h-[100%]"
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="my-10">
      <div
        className={`max-w-[85vw] flex h-full ${bgColor} mx-auto rounded-[44px] pl-6 pb-6`}
      >
        <div className="w-[60%] ">
          <div className="mt-20  ml-10  mb-20 text-left flex flex-col justify-center">
            <h1 className="text-4xl leading-relaxed text-[#002147] font-semibold mb-6 space-y-52">
              {heading}
            </h1>
            <p className="text-[#334D6C] font-light  text-lg">
              {description}
            </p>
          </div>
        </div>
        <div>
          <img
            src={imgUrl}
            width={imgWidth}
            alt="hero"
            className={`relative ${marginLeft} bottom-16`}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;