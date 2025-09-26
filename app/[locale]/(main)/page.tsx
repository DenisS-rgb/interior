'use client';
import { useTranslations } from "next-intl";
import Hero from "./Hero";

export default function Home() {
  const t = useTranslations("");
  return (
    <div className="">
      <Hero />
      Home Page
    </div>
  );
}
