'use client';
import { useTranslations } from "next-intl";
import Image from "next/image";
import Main from "../_components/Main";
import About from "../_components/About";

export default function Home() {
  const t = useTranslations("");
  return (
    <div className="flex flex-col">
      <Main />
      <About />
      {/* <Hero /> */}
    </div>
  );
}