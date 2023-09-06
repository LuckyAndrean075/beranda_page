"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./globals.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import avatar from "../public/avatar.svg";
import banner from "../public/img-banner.svg";
import banner2 from "../public/bannerMobile.svg";
import Link from "next/link";

export default function Home() {
  const code = `
    for (i in range(10)) {
      print("Slide " + str(i + 1));
    }
  `;
  return (
    <main className="overflow-x-hidden bg-[#6495ED] md:bg-white">
      {/* testimoni */}
      <div className="flex h-auto md:h-[40rem] flex-col items-center justify-start p-10 md:p-20 bg-[#6495ED]">
        <h3 className="text-2xl font-bold text-white">Testimoni</h3>
        <div className="px-15 lg:px-52 mt-2">
          <p className="text-base font-medium text-center text-white">
            E-Course memberikan bukti nyata keberhasilan dan manfaat yang
            diperoleh oleh peserta kursus. Lihat bagaimana pengalaman mereka
            bergabung dalam E-Course
          </p>
        </div>
        <div className="max-w-[400px] md:max-w-[768px] lg:max-w-[1143px] px-5 lg:px-0 flex">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            navigation={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
                loop: true,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
                loop: true,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="flex flex-col justify-center align-center mt-10"
          >
            {code.split("\n").map((slide, i) => (
              <SwiperSlide
                key={i + 1}
                className="bg-white w-10 text-black h-48 rounded-2xl py-5 px-10"
              >
                <div className="flex gap-6 mb-5">
                  <Image
                    className="rounded-full"
                    src={avatar}
                    width={58}
                    height={58}
                    alt="Picture of the author"
                  />
                  <div className="flex flex-col">
                    <h6 className="text-xl font-semibold">Roberto Kalvin</h6>

                    <div className="text-yellow-400 flex gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <p className="text-sm font-light text-black">4/5</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-base font-medium text-left">
                    “Worth it banget belajar disini! Materi sangat lengkap,
                    dapet sertifikat juga”
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* buat akun */}
      <div className="flex flex-col items-center justify-start py-2 md:py-10 h-auto">
        <div className="md:flex max-w-[1143px] w-full md:shadow-lg md:rounded-2xl md:-mt-36  md:bg-white">
          <div className="w-full md:w-4/6 py-8 px-5 md:pl-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white md:text-black">
              Buat Akun Sekarang, Gratis!
            </h2>
            <div className="w-full md:w-4/6 flex items-end md:pr-2 md:hidden ">
              <Image src={banner2} alt="banner" />
            </div>
            <div className="my-5 pr-10 md:pr-20 lg:pr-40">
              <p className="text-base font-medium text-left text-white md:text-black">
                Gabung bersama kami dan dapatkan informasi hingga diskon spesial
                buat kamu
              </p>
            </div>
            <Link
              href="/"
              className="border-2 bg-white md:bg-transparent md:border-black rounded-3xl px-10 py-2 inline-block font-semibold hover:bg-[#6495ED] hover:text-white md:hover:border-white"
            >
              Daftar
            </Link>
          </div>
          <div className="w-full md:w-4/6 items-end md:pr-2 hidden md:flex ">
            <Image className="w-[524px]" src={banner} alt="banner" />
          </div>
        </div>
      </div>
    </main>
  );
}
