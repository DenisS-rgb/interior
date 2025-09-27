'use client';
import { useTranslations } from "next-intl";
import Image from "next/image";
import Main from "../_components/Main";
import About from "../_components/About";

import Hero from "./Hero";
import Footer from "../_components/Footer";
import Carousel from "../_components/Carousel";
import CEO from "../_components/CEO";
import Services from "../_components/Services";

export default function Home() {
  const t = useTranslations("");
  return (
    <div className="flex flex-col">
      {/* <Main /> */}
      {/* <About /> */}
      <CEO />
      <Services />
      <Carousel />
      {/* <Hero /> */}
      {/* <Footer /> */}
    </div>
  );
}