"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { news } from "../../constants/news";
import "@splidejs/react-splide/css";

export default function Home() {
  return (
    <main className="home relative flex min-h-screen flex-col gap-6 items-center w-full  overflow-hidden">
      <div className="flex w-full items-center justify-between gap-0 bg-[#0B1A62] pr-4 pt-2">
        <Link href="/" className="shrink-0">
          <img src="/favicon.svg" alt="logo" />
        </Link>
        <div className="w-full flex items-center justify-center mr-4 gap-2">
          <button className="flex items-center gap-2">
            <svg
              className="block mb-1"
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0C4.313 0 0.5 3.813 0.5 8.5C0.5 10.518 1.2245 12.4765 2.5465 14.024C2.6975 14.1955 6.26 18.2435 7.45 19.378C7.8845 19.7925 8.442 20 9 20C9.558 20 10.1155 19.7925 10.5505 19.378C11.934 18.0585 15.3125 14.1855 15.4605 14.0155C16.7755 12.4765 17.5 10.518 17.5 8.5C17.5 3.813 13.687 0 9 0ZM9 11C7.6195 11 6.5 9.8805 6.5 8.5C6.5 7.1195 7.6195 6 9 6C10.3805 6 11.5 7.1195 11.5 8.5C11.5 9.8805 10.3805 11 9 11Z"
                fill="#637394"
              />
            </svg>
            <span className="font-bold text-sm">Bessengue</span>
          </button>
          <button className="flex items-center gap-2">
            <svg
              className="block mb-1"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 -0.000976562C4.486 -0.000976562 0 4.48502 0 9.99902C0 11.5925 0.385711 13.1715 1.11621 14.585L0.0458984 18.4141C-0.0746016 18.8481 0.0481875 19.3153 0.367188 19.6338C0.604688 19.8713 0.924953 20 1.25195 20C1.36445 20 1.47591 19.9851 1.58691 19.9541L5.41797 18.8848C6.83147 19.6148 8.4085 19.999 10 19.999C15.514 19.999 20 15.513 20 9.99902C20 4.48502 15.514 -0.000976562 10 -0.000976562ZM8.25 4.5H11.25C11.664 4.5 12 4.8355 12 5.25V6.5C12 7.548 11.536 8.53172 10.7275 9.19922C10.588 9.31472 10.419 9.37109 10.251 9.37109C10.0345 9.37109 9.81987 9.27813 9.67188 9.09863C9.40788 8.77913 9.45296 8.30697 9.77246 8.04297C10.235 7.66147 10.5 7.099 10.5 6.5V6H8.25C7.836 6 7.5 5.6645 7.5 5.25C7.5 4.8355 7.836 4.5 8.25 4.5ZM13.75 4.5C14.164 4.5 14.5 4.8355 14.5 5.25V7H15.25C15.664 7 16 7.3355 16 7.75C16 8.1645 15.664 8.5 15.25 8.5H14.5V11.75C14.5 12.1645 14.164 12.5 13.75 12.5C13.336 12.5 13 12.1645 13 11.75V5.25C13 4.8355 13.336 4.5 13.75 4.5ZM7.25 7C7.5605 7 7.8387 7.19097 7.9502 7.48047L10.4502 13.9805C10.5987 14.3675 10.4056 14.8017 10.0186 14.9502C9.93005 14.9842 9.84 15 9.75 15C9.4485 15 9.1643 14.8166 9.0498 14.5186L8.46582 13H6.03418L5.4502 14.5195C5.3012 14.9065 4.86595 15.0992 4.48145 14.9502C4.09495 14.8017 3.9013 14.3679 4.0498 13.9814L6.5498 7.48145C6.6613 7.19145 6.9395 7 7.25 7ZM7.25 9.83984L6.61133 11.5H7.88867L7.25 9.83984Z"
                fill="#637394"
              />
            </svg>
            <span className="font-bold text-sm">Eng</span>
          </button>
        </div>
        <button className="primary font-bold shrink-0">Log in</button>
      </div>
      <div className="flex items-center gap-2 w-full px-4 overflow-x-scroll">
        <button className="bg-white text-primary rounded-full py-3 px-4 text-sm flex items-center gap-1 shrink-0">
          <span>Les nouveautés</span>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.375 0.274963L5 3.64996L1.625 0.274963L0.5 1.39996L5 5.89996L9.5 1.39996L8.375 0.274963Z"
              fill="#0E0E0F"
            />
          </svg>
        </button>
        <button className="bg-white text-white bg-opacity-5 rounded-full py-3 px-4 text-sm flex items-center gap-1 shrink-0">
          <span>Prochaines sorties</span>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.375 0.274963L5 3.64996L1.625 0.274963L0.5 1.39996L5 5.89996L9.5 1.39996L8.375 0.274963Z"
              fill="white"
            />
          </svg>
        </button>
        <button className="bg-white text-white bg-opacity-5 rounded-full py-3 px-4 text-sm flex items-center gap-1 shrink-0">
          <span>Les classiques</span>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.375 0.274963L5 3.64996L1.625 0.274963L0.5 1.39996L5 5.89996L9.5 1.39996L8.375 0.274963Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="w-full flex items-center justify-center">
        <Splide
          options={{
            fixedWidth: "310px",
            gap: "10px",
            type: "loop",
            arrows: false,
            pagination: true,
            drag: true,
            focus: "center",
          }}
          aria-label="Photos"
        >
          {news.map((film, index) => (
            <SplideSlide key={index}>
              <Image className="bg-textmain" width={310} height={240} src={film.image} alt="image" />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </main>
  );
}
