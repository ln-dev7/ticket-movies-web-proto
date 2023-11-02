"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";

export default function Start() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".circle", {
      duration: 1,
      width: "1200px",
      height: "1200px",
    })
      .to(".one", {
        duration: 1,
        opacity: 0,
      })
      .to(".two", {
        duration: 1,
        opacity: 1,
      });
  }, []);

  return ( 
    <main className="splash relative flex h-screen flex-col items-center w-full overflow-hidden">
      <div className="one absolute h-full w-full flex items-center justify-center bg-white">
        <a className="z-10 font-bold text-lg" href="#" target="_blank">
        Ticket Movies
        </a>
        <div className="circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-[50%] bg-danger"></div>
      </div>
      <div className="two z-10 opacity-0 absolute w-full h-full">
        <Image
          src="/splash.png"
          alt="Splash"
          width={375}
          height={812}
          className="w-full h-full object-cover"
        />
        <div className="splash-bottom flex flex-col items-center absolute bottom-0 px-8 pb-16 pt-96 gap-20 w-full">
          <Link href="/home" className="primary w-full h-[50px]">
            Commencez
          </Link>
          <div className="w-full flex flex-col items-center gap-2">
            <a
              className="underline underline-offset-2 opacity-70 text-sm"
              href="https://leonelngoya.com"
              target="_blank"
            >
              Code by LN
            </a>
            <a
              className="underline underline-offset-2 opacity-70 text-sm"
              href="https://bento.me/emaniui"
              target="_blank"
            >
              Design by EmaniUI
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
