"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { films } from "../../constants/films";
import "@splidejs/react-splide/css";

export default function Home() {
  const tl = gsap.timeline();
  // modal language
  const openModalLanguage = () => {
    gsap.to(".modal-language", {
      display: "flex",
    });
    gsap.to(".modal-language-container", {
      duration: 0.3,
      transform: "translateY(0)",
      ease: "power0.easeNone",
    });
  };
  const closeModalLanguage = () => {
    gsap.to(".modal-language-container", {
      duration: 0.3,
      transform: "translateY(100%)",
      ease: "power0.easeNone",
    });
    gsap.to(".modal-language", {
      display: "none",
    });
  };

  // modal location
  const openModalLocation = () => {
    gsap.to(".modal-location", {
      display: "flex",
    });
    gsap.to(".modal-location-container", {
      duration: 0.3,
      transform: "translateY(0)",
      ease: "power0.easeNone",
    });
  };
  const closeModalLocation = () => {
    gsap.to(".modal-location-container", {
      duration: 0.3,
      transform: "translateY(100%)",
      ease: "power0.easeNone",
    });
    gsap.to(".modal-location", {
      display: "none",
    });
  };
  // modal login
  const openModalLogin = () => {
    gsap.to(".modal-login", {
      display: "flex",
    });
    gsap.to(".modal-login-container", {
      duration: 0.3,
      transform: "translateY(0)",
      ease: "power0.easeNone",
    });
  };
  const closeModalLogin = () => {
    gsap.to(".modal-login-container", {
      duration: 0.3,
      transform: "translateY(100%)",
      ease: "power0.easeNone",
    });
    gsap.to(".modal-login", {
      display: "none",
    });
  };
  // modal video
  const openModalVideo = () => {
    gsap.to(".modal-video", {
      display: "flex",
    });
    gsap.to(".modal-video-container", {
      duration: 0.3,
      transform: "translateY(0)",
      ease: "power0.easeNone",
    });
  };
  const closeModalVideo = () => {
    gsap.to(".modal-video-container", {
      duration: 0.3,
      transform: "translateY(100%)",
      ease: "power0.easeNone",
    });
    gsap.to(".modal-video", {
      display: "none",
    });
  };
  return (
    <main className="home relative flex min-h-screen flex-col gap-4 items-center w-full  overflow-hidden pt-24 pb-16">
      <div className="flex backdrop-blur-[20px] fixed top-0 z-20 w-full items-center justify-between gap-0 bg-[#0c208080] pr-4 pt-2">
        <Link href="/" className="shrink-0 pl-8 font-bold text-md">
          TM
        </Link>
        <div className="w-full flex items-center justify-center mr-4 gap-2">
          <button
            onClick={openModalLocation}
            className="localisation flex items-center gap-2"
          >
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
          <button
            onClick={openModalLanguage}
            className="language flex items-center gap-2"
          >
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
        <button
          onClick={openModalLogin}
          className="login primary font-bold shrink-0"
        >
          Log in
        </button>
      </div>
      <div className="flex items-center gap-2 w-full px-4 overflow-x-scroll tags">
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
      <div className="w-full flex items-center justify-center pb-[40px]">
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
          {films.map((film, index) => (
            <SplideSlide key={index}>
              <div
                className="card relative w-full h-full"
                onClick={openModalVideo}
              >
                <Image
                  className="bg-textmain"
                  width={310}
                  height={240}
                  src={film.image}
                  alt="image"
                />
                <div className="absolute z-20 bg-white rounded-full bg-opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <svg
                    width="59"
                    height="59"
                    viewBox="0 0 59 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_b_1406_2011)">
                      <rect
                        x="-0.000183105"
                        y="0.454575"
                        width="58.1818"
                        height="58.1818"
                        rx="29.0909"
                        fill="white"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M23.3619 20.5052C22.3199 20.5464 21.3635 21.3965 21.3635 22.5418V36.5492C21.3635 38.0763 23.0647 39.0782 24.4006 38.3381L37.0408 31.3344C38.4151 30.5729 38.4151 28.5181 37.0408 27.7566L24.4006 20.7529C24.0666 20.5679 23.7092 20.4914 23.3619 20.5052Z"
                        fill="white"
                        fill-opacity="0.5"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_b_1406_2011"
                        x="-36.3638"
                        y="-35.9091"
                        width="130.909"
                        height="130.909"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="18.1818"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_1406_2011"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_1406_2011"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className="absolute top-4 w-full px-4 flex items-center justify-between">
                  <button className="text-xs font-light z-10 bg-black bg-opacity-50 py-1 px-3 rounded-full flex items-center gap-2">
                    <span className="flex w-2 h-2 bg-danger rounded-full"></span>
                    {film.watching}
                  </button>
                  <button className="">
                    <svg
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.363586"
                        y="0.272751"
                        width="36.3636"
                        height="36.3636"
                        rx="18.1818"
                        fill="black"
                        fill-opacity="0.6"
                      />
                      <path
                        d="M10.3636 17.4744C10.3636 16.7213 10.9741 16.1108 11.7273 16.1108H13.0909L17.6828 11.77C18.0088 11.4618 18.5454 11.6929 18.5454 12.1416V24.7674C18.5454 25.2161 18.0088 25.4473 17.6828 25.139L13.0909 20.7983H11.7273C10.9741 20.7983 10.3636 20.1877 10.3636 19.4346V17.4744Z"
                        fill="white"
                      />
                      <path
                        d="M26.0454 15.7272L23.3182 18.4545M20.5909 21.1818L23.3182 18.4545M23.3182 18.4545L26.0454 21.1818M23.3182 18.4545L20.5909 15.7272"
                        stroke="white"
                        stroke-width="2.04545"
                      />
                    </svg>
                  </button>
                </div>
                <div className="absolute card-bottom flex items-start gap-1 flex-col w-full pb-4 pt-72 px-4 bottom-0">
                  <h3 className="font-bold text-2xl">{film.name}</h3>
                  <div className="flex items-center gap-1">
                    {film.tags.map((tag, index) => (
                      <span
                        className="text-[#BF94FF] bg-white bg-opacity-[0.08] py-1 px-2 text-xs rounded-full font-semibold"
                        key={index}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="w-full flex flex-col items-center gap-4 px-4 mt-2">
        <div className="w-full flex items-center justify-between gap-4 ">
          <h3 className="font-bold text-xl">Semaine du 17 - 23 Oct</h3>

          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.25 11C14.2578 11 11 14.2578 11 18.25C11 22.2422 14.2578 25.5 18.25 25.5C19.8866 25.5 21.3945 24.9465 22.6104 24.0254L27.293 28.707C27.3851 28.803 27.4955 28.8796 27.6176 28.9324C27.7397 28.9852 27.8712 29.0131 28.0042 29.0144C28.1373 29.0158 28.2692 28.9906 28.3924 28.9403C28.5156 28.89 28.6275 28.8157 28.7216 28.7216C28.8157 28.6275 28.89 28.5156 28.9403 28.3924C28.9906 28.2692 29.0158 28.1373 29.0144 28.0042C29.0131 27.8712 28.9852 27.7397 28.9324 27.6176C28.8796 27.4955 28.803 27.3851 28.707 27.293L24.0254 22.6104C24.9465 21.3945 25.5 19.8866 25.5 18.25C25.5 14.2578 22.2422 11 18.25 11ZM18.25 13C21.1613 13 23.5 15.3387 23.5 18.25C23.5 19.6479 22.957 20.9103 22.0742 21.8486C21.9883 21.9108 21.9128 21.9863 21.8506 22.0723C20.9121 22.9562 19.6489 23.5 18.25 23.5C15.3387 23.5 13 21.1613 13 18.25C13 15.3387 15.3387 13 18.25 13Z"
              fill="#637394"
            />
          </svg>
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          {films.map((film, index) => (
            <div className="w-full flex flex-col items-start gap-0" key={index}>
              <div className="week-card-image w-full relative h-[230px] overflow-hidden rounded-lg">
                <Image
                  className="bg-textmain w-full h-full object-cover"
                  width={310}
                  height={240}
                  src={film.image}
                  alt="image"
                />
                <button className="bg-danger top-2 right-2 absolute text-sm py-1 px-2 rounded-lg font-semibold">
                  {film.time}
                </button>
              </div>
              <h3 className="text-lg font-bold mt-2">{film.name}</h3>
              <p className="text-textmuted text-md"> {film.type}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="w-full flex flex-col items-center gap-2 mt-6">
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
       
      <div
        className="modal-location hidden fixed z-50 inset-0 bg-black bg-opacity-50 flex-col items-end justify-end"
        onClick={closeModalLocation}
      >
        <div
          className="bg-primary modal-location-container border border-[#6d9eff1a]  rounded-t-2xl rounded-r-2xl w-full p-4 flex flex-col items-center"
          style={{
            transform: "translateY(100%)",
          }}
        >
          <div className="relative w-full mb-2">
            <svg
              className="absolute top-1/2 left-4 -translate-y-1/2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.25 3C6.25778 3 3 6.25778 3 10.25C3 14.2422 6.25778 17.5 10.25 17.5C11.8866 17.5 13.3945 16.9465 14.6104 16.0254L19.293 20.707C19.3851 20.803 19.4955 20.8796 19.6176 20.9324C19.7397 20.9852 19.8712 21.0131 20.0042 21.0144C20.1373 21.0158 20.2692 20.9906 20.3924 20.9403C20.5156 20.89 20.6275 20.8157 20.7216 20.7216C20.8157 20.6275 20.89 20.5156 20.9403 20.3924C20.9906 20.2692 21.0158 20.1373 21.0144 20.0042C21.0131 19.8712 20.9852 19.7397 20.9324 19.6176C20.8796 19.4955 20.803 19.3851 20.707 19.293L16.0254 14.6104C16.9465 13.3945 17.5 11.8866 17.5 10.25C17.5 6.25778 14.2422 3 10.25 3ZM10.25 5C13.1613 5 15.5 7.33866 15.5 10.25C15.5 11.6479 14.957 12.9103 14.0742 13.8486C13.9883 13.9108 13.9128 13.9863 13.8506 14.0723C12.9121 14.9562 11.6489 15.5 10.25 15.5C7.33866 15.5 5 13.1613 5 10.25C5 7.33866 7.33866 5 10.25 5Z"
                fill="#637394"
              />
            </svg>
            <input
              type="text"
              placeholder="Recherche"
              className="border border-textmuted/30 py-3 pl-12 text-textmuted/30 placeholder:text-textmuted/30 pr-3 rounded-lg w-full bg-transparent outline-none"
            />
          </div>
          <div className="w-full p-4 border-b border-textmuted/30">
            <span className="text-sm">REBERO, Kigali Rwanda</span>
          </div>
          <div className="w-full p-4 border-b border-textmuted/30">
            <span className="text-sm">Yaoundé 1, Yaoundé Cameroun</span>
          </div>
          <div className="w-full p-4 border-b border-textmuted/30">
            <span className="text-sm">Bessengue, Douala Cameroun</span>
          </div>
          <div className="w-full p-4 border-b border-textmuted/30">
            <span className="text-sm">WOLOGUEDE, Cotonou BENIN</span>
          </div>
          <div className="w-full p-4 border-b border-textmuted/30">
            <span className="text-sm">POPO, Braazzaville Congo</span>
          </div>
          <div className="w-full p-4 border-b border-textmuted/30">
            <span className="text-sm">GODOPE, Lomé Togo</span>
          </div>
          <div className="w-full p-4">
            <span className="text-sm">Teranga, Dakar Sénégal</span>
          </div>
        </div>
      </div>

      <div
        className="modal-login hidden fixed z-50 inset-0 bg-black bg-opacity-50 flex-col items-end justify-end"
        onClick={closeModalLogin}
      >
        <div
          className="bg-primary modal-login-container border border-[#6d9eff1a]  rounded-t-2xl rounded-r-2xl w-full p-4 flex flex-col items-center gap-1"
          style={{
            transform: "translateY(100%)",
          }}
        >
          <h2 className="font-semibold text-lg">Se connecter</h2>
          <p className="text-textmuted text-sm">Acces pour payer les tickets</p>
          <div className="relative w-full my-2">
            <input
              type="text"
              placeholder="Numero de tel"
              className="border border-textmuted/30 p-3 text-textmuted/30 placeholder:text-textmuted/30 rounded-lg w-full bg-transparent outline-none"
            />
          </div>
          <button className="primary w-full h-[50px]">Continuer</button>
        </div>
      </div>

      <div
        className="modal-language hidden fixed z-50 inset-0 bg-black bg-opacity-50 flex-col items-end justify-end"
        onClick={closeModalLanguage}
      >
        <div
          className="bg-primary modal-language-container border border-[#6d9eff1a]  rounded-t-2xl rounded-r-2xl w-full p-4 flex flex-col items-center"
          style={{
            transform: "translateY(100%)",
          }}
        >
          <span className="w-full text-left py-4 text-sm">Italien</span>
          <div className="w-full h-[1px] bg-textmuted/30"></div>
          <span className="w-full text-left py-4 text-sm">Francais</span>
          <div className="w-full h-[1px] bg-textmuted/30"></div>
          <span className="w-full text-left py-4 text-sm">Anglais</span>
        </div>
      </div>

      <div
        className="modal-video hidden fixed z-50 inset-0 bg-black bg-opacity-50 flex-col items-end justify-end"
        onClick={closeModalVideo}
      >
        <div
          className="bg-primary modal-video-container border border-[#6d9eff1a]  rounded-t-2xl rounded-r-2xl w-full p-4 flex flex-col items-center"
          style={{
            transform: "translateY(100%)",
          }}
        >
          <h2 className="font-semibold text-lg">Paw Patrol Extrait</h2>
          <p className="text-textmuted text-sm">
            Regardez un extrait de la Paw Patrol.
          </p>
          <div className="my-2 w-full h-full flex items-center justify-center overflow-hidden">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full aspect-video px-4 bg-textmuted/10"
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>

          <button className="primary w-full h-[50px]">Fermer</button>
        </div>
      </div>
    </main>
  );
}
