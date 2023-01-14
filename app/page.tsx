"use client";

import PhotoHome from "../public/Svg/SvgLogo/PhotoHome";
import Image from "next/image";
import Homeback from "../public/Imagem/Homeback.png";
import Lottie from "lottie-react";
import HomeAni from "../public/animatejson/HomeAni/HomeAni.json";
export default function Home() {
  return (
    <>
      <div className=" w-[90%] mt-[55px] xl:mt-32">
        <div className="grid grid-cols-1 xl:grid-cols-2  items-center ">
          <div className="hidden absolute xl:block">
            <Image src={Homeback} alt={""} />
          </div>

          <div className="items-center absolute ml-8 xl:relative xl:ml-0 xl:block pl-40 z-10">
            <Lottie animationData={HomeAni} size={800} />
          </div>
          <div className="z-10 items-center md:pl-20 xl:ml-[50px]  rounded-[10px] ">
            <div className=" absolute ml-5 mt-10 xl:relative xl:mt-0 xl:block xl:ml-[100px]">
              <PhotoHome />
            </div>
            <div className="w-[53%] md:w-[90%]  ml-10 h-[100%]  mt-[65%]  xl:mt-0">
              <h1 className=" font-bold text-2xl xl:text-4xl text-center">
                Mateus Borges
              </h1>
              <h1 className="font-bold text-1xl xl:text-3xl ml-3 xl:ml-16 text-emerald-400 ">
                Full-Stack Jr
              </h1>
            </div>
            <p className="p-8 text-lg ">
              Sou estudante de sistemas de informação, com experiência em
              automação, e trabalho como junior, sendo full stack atualmente
              focado nas tecnologias web, React, ReactNative, nodeJS e python
              para ver meus trabalhos no Github, linkedin.
            </p>
          </div>
        </div>

        <div className="flex justify-center"></div>
      </div>
    </>
  );
}
