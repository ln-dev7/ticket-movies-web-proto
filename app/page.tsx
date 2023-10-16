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
        <a className="z-10" href="#" target="_blank">
          <svg
            width="193"
            height="29"
            viewBox="0 0 193 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="193" height="29" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_1007_2786"
                  transform="scale(0.00518135 0.0344828)"
                />
              </pattern>
              <image
                id="image0_1007_2786"
                width="193"
                height="29"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
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
