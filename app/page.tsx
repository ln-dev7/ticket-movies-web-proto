"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";

export default function Start() {
  useEffect(() => {
    const tl = gsap.timeline();
  }, []);

  return (
    <main className="splash relative flex min-h-screen flex-col items-center w-full">
      <div className="one absolute z-10 h-screen w-full flex items-center justify-center bg-white">
        <a className="z-10" href="#" target="_blank">
          <img src="/logo.svg" alt="logo" />
        </a>
        <div className="circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-[50%] bg-danger"></div>
      </div>
      <div className="two absolute w-full h-screen">
        <Image
          src="/splash.png"
          alt="Splash"
          width={375}
          height={812}
          className="w-full h-full object-cover"
        />
        <div className="splash-bottom flex flex-col items-center absolute bottom-0 px-8 pb-16 pt-96 gap-20 w-full">
          <Link href="/home" className="primary w-full">
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
