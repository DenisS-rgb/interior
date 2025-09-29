'use client';
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useTranslations } from 'next-intl'
import { useState } from "react";
import FormComponent from "./FormComponent";

const About = () => {
  const t = useTranslations('about');
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div id="about" className="bg-[#1A1D1D] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[300px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-[100px]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8 lg:mb-12 flex flex-col gap-2 sm:gap-3 lg:gap-6">
          <h2 className="text-[#6D7D7D] font-kanit tracking-[0.2em] sm:tracking-[0.3em] text-xs font-light uppercase">
            {t('header')}
          </h2>
          <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-[400] leading-tight max-w-4xl font-kanit">
            {t('title')}
          </h3>
          <div className="max-w-2xl font-[400] text-sm sm:text-base leading-relaxed font-nunito text-white/60 space-y-3 sm:space-y-4">
            <p>
              {t('description.paragraph1')}
            </p>
            <p className="hidden sm:block">
              {t('description.paragraph2Full')}
            </p>
            <p className="block sm:hidden">
              {t('description.paragraph2Short')}
            </p>
            <p>
              {t('description.paragraph3')}
            </p>
          </div>
        </div>

        {/* Images and Stats Grid - Mobile and Tablet Layout */}
        <div className="block xl:hidden space-y-4 sm:space-y-6">
          {/* Images - Responsive Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="sm:col-span-2">
              <Image
                src="/image/about1.png"
                alt={t('images.project1')}
                width={400}
                height={300}
                className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg object-center"
                priority
              />
            </div>
            <div className="order-2 sm:order-none">
              <Image
                src="/image/about2.png"
                alt={t('images.project2')}
                width={400}
                height={300}
                className="w-full h-48 sm:h-56 md:h-72 object-cover rounded-lg object-center"
              />
            </div>
            <div className="order-1 sm:order-none">
              <Image
                src="/image/about3.png"
                alt={t('images.project3')}
                width={400}
                height={200}
                className="w-full h-40 sm:h-56 md:h-72 object-cover rounded-lg object-center"
              />
            </div>
          </div>

          {/* Stats - Mobile and Tablet */}
          <div className="flex justify-center font-kanit py-6 sm:py-8">
            <div className="flex space-x-8 sm:space-x-12 md:space-x-16">
              <div className="text-center">
                <h3 className="text-[#6D7D7D] text-2xl sm:text-3xl md:text-4xl font-light">{t('stats.projects.number')}</h3>
                <p className="text-white text-xs sm:text-sm md:text-base tracking-wider sm:tracking-widest uppercase leading-tight mt-1">
                  {t('stats.projects.label')}
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-[#6D7D7D] text-2xl sm:text-3xl md:text-4xl font-light">{t('stats.clients.number')}</h3>
                <p className="text-white text-xs sm:text-sm md:text-base tracking-wider sm:tracking-widest uppercase leading-tight mt-1">
                  {t('stats.clients.label')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Images and Stats Grid - Desktop Layout */}
        <div className="hidden xl:grid xl:grid-cols-6 gap-4 2xl:gap-6">
          {/* First Large Image */}
          <div className="col-span-2 h-full">
            <Image
              src="/image/about1.png"
              alt={t('images.project1')}
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-lg"
              priority
            />
          </div>

          {/* Second Image */}
          <div className="col-span-2 h-full">
            <Image
              src="/image/about2.png"
              alt={t('images.project2')}
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Column - Third Image and Stats */}
          <div className="col-span-2 h-full flex flex-col gap-4 2xl:gap-6">
            {/* Third Image - Top Half */}
            <div className="flex-1">
              <Image
                src="/image/about3.png"
                alt={t('images.project3')}
                width={300}
                height={180}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Stats - Bottom Half */}
            <div className="flex-1 flex items-center justify-center font-kanit bg-[#1A1D1D]/50 rounded-lg">
              <div className="flex space-x-6 2xl:space-x-12">
                <div className="text-left">
                  <h3 className="text-[#6D7D7D] text-3xl 2xl:text-[40px] font-light">{t('stats.projects.number')}</h3>
                  <p className="text-white text-sm 2xl:text-base tracking-widest uppercase leading-tight">
                    {t('stats.projects.label')}
                  </p>
                </div>
                <div className="text-left">
                  <h3 className="text-[#6D7D7D] text-3xl 2xl:text-[40px] font-light">{t('stats.clients.number')}</h3>
                  <p className="text-white text-sm 2xl:text-base tracking-widest uppercase leading-tight">
                    {t('stats.clients.label')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Background Image */}
        <div className="relative translate-y-1/2">
          <div className="">
            <div className="relative">
              <Image
                src="/image/about4.png"
                alt={t('images.bottomBackground')}
                width={1920}
                height={200}
                className="w-full h-auto rounded-lg object-cover"
              />
              {/* Content Overlay */}
              <div className={cn("absolute inset-0 flex items-center justify-center px-4 sm:px-8 lg:pl-[450px] md:pl-[300px] lg:justify-center", "max-xl:pl-32 max-xl:justify-center max-sm:pl-0")}>
                <div className={cn("text-center lg:text-start font-kanit max-w-[600px]", "max-lg:max-w-[400px] max-md:text-center")}>
                  <h1 className={cn("text-white max-2xl:text-2xl text-4xl font-normal leading-tight mb-2 lg:mb-6", "max-xl:text-2xl max-lg:text-xl max-md:text-base max-sm:text-sm")}>
                    {t('bottom.title')}
                  </h1>
                  <div className="inline-block">
                    <div onClick={() => setIsFormOpen(true)} className="text-[10px] sm:text-base text-white border border-[#6D7D7D] rounded-full px-2 sm:px-6 py-1 sm:py-3 hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer tracking-widest">
                      {t('bottom.button')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isFormOpen && <FormComponent setIsFormOpen={setIsFormOpen} />}
    </div>
  )
}

export default About